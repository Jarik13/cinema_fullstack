using Microsoft.AspNetCore.Identity;
using MyFilms.Models;

namespace MyFilms.Data
{
    public class SeedData
    {
        public static async Task Initialize(IServiceProvider serviceProvider, UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            // Перевірка, чи існує роль "Admin", якщо ні - створюємо
            var roleExists = await roleManager.RoleExistsAsync("Admin");
            if (!roleExists)
            {
                await roleManager.CreateAsync(new IdentityRole("Admin"));
            }

            // Перевірка, чи існує роль "User", якщо ні - створюємо
            roleExists = await roleManager.RoleExistsAsync("User");
            if (!roleExists)
            {
                await roleManager.CreateAsync(new IdentityRole("User"));
            }

            // Перевірка, чи існує адміністратор
            var user = await userManager.FindByNameAsync("admin");
            if (user == null)
            {
                user = new User
                {
                    UserName = "admin",
                    Email = "admin@gmail.com",
                    Role = "Admin",
                    Password = "AdminPassword123!"
            };

                var result = await userManager.CreateAsync(user, "AdminPassword123!");
                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(user, "Admin");
                }
            }

            // Можна додавати ще користувачів за потреби
        }
    }

}
