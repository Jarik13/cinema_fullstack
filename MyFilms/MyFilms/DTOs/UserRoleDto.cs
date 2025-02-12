namespace MyFilms.DTOs
{
    public class UserRoleDto
    {
        //тут не використовую required, бо це внутрішня логіка
        //ім'я користувача
        public string Username { get; set; }

        //роль користувача
        public string Role { get; set; }
    }
}
