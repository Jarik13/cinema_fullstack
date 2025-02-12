using System.ComponentModel.DataAnnotations;

namespace MyFilms.DTOs
{
    public class UserRegisterDto
    {
        //ім'я користувача
        [Required(ErrorMessage = "Username is required")]
        public string Username { get; set; }

        //email для реєстрації
        public string Email { get; set; }

        //пароль для реєстрації
        public string Password { get; set; }

        //age для реєстрації
        [Required(ErrorMessage = "Age is required")]
        [Range(0, 100, ErrorMessage = "Age must be between 0 and 100")]
        public int Age { get; set; }
    }
}
