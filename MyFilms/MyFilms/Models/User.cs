using Microsoft.AspNetCore.Identity;

namespace MyFilms.Models
{
    public class User: IdentityUser
    {
        //нема Guid Id, бо IdentityUser має свій Id типу string
        //нема Username та Email
        public string Password { get; set; }
        public string Role { get; set; }
        public int Age { get; set; }

        //1:N(U:T)
        public List<Ticket> Tickets { get; set; } = new List<Ticket>();

        //1:N(U:R)
        public List<Review> Reviews { get; set; } = new List<Review>();
    }
}
