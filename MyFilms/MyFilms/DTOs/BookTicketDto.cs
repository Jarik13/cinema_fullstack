using MyFilms.Models;

namespace MyFilms.DTOs
{
    public class BookTicketDto
    {
        //хто купує квиток
        public Guid UserId { get; set; }
        //на який сеанс
        public Guid SessionId { get; set; }
        //яке місця
        public List<int> Seat_numbers { get; set; }

    }
}
