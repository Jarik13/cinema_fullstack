using System.ComponentModel.DataAnnotations;

namespace MyFilms.DTOs
{
    public class UserLoginDto
    {
        //email для залогінення
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Invalid email format")]
        public string Email { get; set; }

        //пароль для залогінення
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
