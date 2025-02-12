using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyFilms.Data;
using MyFilms.Models;

namespace MyFilms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HelperController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly UserManager<User> userManager;
        public HelperController(AppDbContext context, UserManager<User> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpGet("user/{id}/tickets")]
        public async Task<IActionResult> GetUserTickets(Guid id)
        {
            var user = await userManager.Users
                .Include(u => u.Tickets) // Завантажуємо список квитків користувача
                .FirstOrDefaultAsync(u => u.Id == id.ToString());

            if (user is null)
            {
                return NotFound("User not found");
            }

            return Ok(user.Tickets);
        }

        [Authorize]
        [HttpGet("protected")]
        public IActionResult GetProtectedData()
        {
            return Ok(new { message = "This is protected data!" });
        }

    }
}
