using Humanizer.Localisation;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MyFilms.Models
{
    public class Film
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public int Age_limit { get; set; }
        public int Release_year { get; set; }
        public string ImageUrl { get; set; }

        //M:N (F:G)
        public List<Genre> Genres { get; set; } = new List<Genre>();

        //1:N (F:S)
        public List<Session> Sessions { get; set; } = new List<Session>();

        //1:N (F:R)
        public List<Review> Reviews { get; set; } = new List<Review>();
    }
}//+++
