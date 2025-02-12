using System.Text.Json.Serialization;

namespace MyFilms.Models
{
    public class Ticket
    {
        public Guid Id { get; set; }
        public int Seat_number { get; set; }
        public string Status { get; set; }
        public int Price { get; set; }
        public DateTime Book_buy_data { get; set; } = DateTime.UtcNow;

        //N:1 (T:U)
        //не Guid Id, бо IdentityUser має свій Id типу string
        [JsonIgnore]
        public string? UserId { get; set; }
        [JsonIgnore]
        public User? User { get; set; }

        //N:1 (T:S)
        public Guid SessionId { get; set; }
        public Session? Session { get; set; }
    }
}
