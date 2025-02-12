using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.IdentityModel.Tokens;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages.Manage;
using MyFilms.DTOs;
using MyFilms.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace MyFilms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<User> userManager;
        private readonly RoleManager<IdentityRole> roleManager;
        private readonly IConfiguration configuration;

        public AccountController(UserManager<User> userManager,
                                 RoleManager<IdentityRole> roleManager,
                                 SignInManager<User> signInManager,
                                 IConfiguration configuration)
        {
            this.userManager = userManager;
            this.roleManager = roleManager;
            this.configuration = configuration;
        }

        //Реєстрація користувача
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserRegisterDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (userDto.Username.ToLower().Contains("admin") || userDto.Email.ToLower().Contains("admin") || userDto.Password.ToLower().Contains("admin"))
            {
                return BadRequest("You can not use admin word in any of your data");
            }

            var usercheck = await userManager.FindByNameAsync(userDto.Username);
            if (usercheck != null)
            {
                return BadRequest("User already exists");
            }

            var user = new User
            {
                UserName = userDto.Username,
                Email = userDto.Email,
                Password = userDto.Password,
                Role = "User"
            };

            // Реєстрація користувача
            var result = await userManager.CreateAsync(user, userDto.Password);
            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }

            // Призначаємо роль користувачеві
            string role = "User";

            // Перевірка на наявність ролі і створення її, якщо немає
            var roleExists = await roleManager.RoleExistsAsync(role);
            if (!roleExists)
            {
                await roleManager.CreateAsync(new IdentityRole(role));
            }

            // Призначаємо роль
            await userManager.AddToRoleAsync(user, role);

            return Ok(new { message = "User registered successfully with role " + role });
        }

        //Логін користувача
        [HttpPost("login")]
        public async Task<IActionResult> Login(UserLoginDto userDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid input data");
            }

            var user = await userManager.FindByEmailAsync(userDto.Email);
            if (user == null)
            {
                return BadRequest("Invalid email");
            }

            var result = await userManager.CheckPasswordAsync(user, userDto.Password);
            if (!result)
            {
                return Unauthorized("Invalid password");
            }

            var token = GenerateJwtToken(user);
            return Ok(new { Token = token });

        }

        private string GenerateJwtToken(User user)
        {
            var userRoles = userManager.GetRolesAsync(user).Result;
            if(user.Email is null || user.UserName is null || userRoles is null)
            {
                return "Invalid user data";
            }

            //формуємо корисну інформацію для токена - ім'я + guid + email + ролі
            var authClaims = new List<Claim>
            {
                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName!),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                    new Claim(ClaimTypes.Email, user.Email),
            };

            authClaims.AddRange(userRoles.Select(role => new Claim(ClaimTypes.Role, role)));

            //формуємо токен

            // Переконаємось, що поля не порожні
            var key = configuration["Jwt:Key"] ?? throw new Exception("JWT Key is missing!");
            var issuer = configuration["Jwt:Issuer"] ?? throw new Exception("JWT Issuer is missing!");
            var expiryMinutes = configuration["Jwt:ExpiryMinutes"] ?? "3600";
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                //хто випустив токен
                issuer: issuer,
                //дата завершення токена
                expires: DateTime.UtcNow.AddMinutes(double.Parse(expiryMinutes)),
                //корисна інформація
                claims: authClaims,
               //підпис для токена
               signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        [HttpPost("profile")]
        public IActionResult GetUserInfo()
        {
            var authHeader = Request.Headers["Authorization"].ToString();
            if (string.IsNullOrEmpty(authHeader) || !authHeader.StartsWith("Bearer "))
            {
                return BadRequest("Invalid token");
            }

            string token = authHeader.Substring("Bearer ".Length);

            // Створюємо об'єкт для декодування токена
            var tokenHandler = new JwtSecurityTokenHandler();
            var jsonToken = tokenHandler.ReadToken(token) as JwtSecurityToken;

            if (jsonToken == null)
            {
                return BadRequest("Invalid token");
            }

            // Перевірка підпису токена за допомогою ключа та issuer (якщо потрібно)
            var key = configuration["Jwt:Key"];
            var issuer = configuration["Jwt:Issuer"];

            if(key is null || issuer is null)
            {
                return BadRequest("Invalid key or issuer");
            }

            var validationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidIssuer = issuer,
                ValidateAudience = false,
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(key)),
                ValidateLifetime = true
            };

            var principal = tokenHandler.ValidateToken(token, validationParameters, out _);
            if(principal is null)
            {
                return BadRequest("Invalid token");
            }

            // Отримуємо дані з токена
            var claims = jsonToken?.Claims.ToList();
            var username = claims?.FirstOrDefault(c => c.Type == JwtRegisteredClaimNames.Sub)?.Value;
            var email = claims?.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value;
            var roles = claims?.Where(c => c.Type == ClaimTypes.Role).Select(c => c.Value).ToList();

            if(username is null || email is null || roles is null)
            {
                return BadRequest("Invalid token data");
            }

            //беру пароль із юзера
            var user = userManager.FindByEmailAsync(email).Result;
            if(user is null)
            {
                return BadRequest("User not found");
            }

            return Ok(new { username, email, roles, user.Password });
        }
    }
}
