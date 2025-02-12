using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyFilms.Data;
using MyFilms.DTOs;
using MyFilms.Models;

namespace MyFilms.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketController : ControllerBase
    {
        private readonly AppDbContext context;
        private readonly UserManager<User> userManager;

        public TicketController(AppDbContext context, UserManager<User> userManager)
        {
            this.context = context;
            this.userManager = userManager;
        }

        [HttpPost("book ticket")]
        public async Task<IActionResult> BookTicket(BookTicketDto ticketDto)
        {

            IActionResult checks;
            if (ticketDto.UserId == Guid.Empty || ticketDto.SessionId == Guid.Empty || ticketDto.Seat_numbers == null)
            {
                return BadRequest("Some info is missing. Retry choosing tickets");
            }
            else
            {
                checks = await DoChecks(ticketDto);
            }

            if (checks is ObjectResult { StatusCode: >= 400 })
            {
                return checks;
            }

            var user = await userManager.Users
                                        .Include(u => u.Tickets) // Завантажуємо список квитків користувача
                                        .FirstOrDefaultAsync(u => u.Id == ticketDto.UserId.ToString());

            if (user is null)
            {
                return NotFound("User not found");
            }

            var tickets = await context.Tickets
                .Where(t => t.SessionId == ticketDto.SessionId && ticketDto.Seat_numbers.Contains(t.Seat_number))
                .ToListAsync();

            if (tickets.Count != ticketDto.Seat_numbers.Count)
            {
                return NotFound("Some tickets were not found.");
            }

            foreach (var ticket in tickets)
            {
                ticket.UserId = ticketDto.UserId.ToString();
                ticket.Status = "Booked";
                ticket.Book_buy_data = DateTime.Now;

                // Додаємо оновлений квиток у список квитків користувача
                if (!user.Tickets.Any(t => t.Id == ticket.Id)) // Уникнення дублікатів
                {
                    user.Tickets.Add(ticket);
                }
            }

            await context.SaveChangesAsync(); // Зберігаємо зміни

            return Ok("Tickets are successfully booked!");
        }

        private async Task<IActionResult> DoChecks(BookTicketDto ticketDto)
        {
            //перевірка чи є такий користувач
            var user = await userManager.FindByIdAsync(ticketDto.UserId.ToString());
            if (user is null)
            {
                return NotFound("User not found");
            }

            //перевірка чи є такий сеанс
            var session = context.Sessions.FirstOrDefault(s => s.Id.Equals(ticketDto.SessionId));
            if (session is null)
            {
                return NotFound("There is no such session available");
            }
            //перевірка чи є такий фільм у базі
            var film = context.Films.FirstOrDefault(f => f.Id == session.FilmId);
            if (film is null)
            {
                return NotFound("Film is not available in this session");
            }
            //перевірка чи користувач має достатній вік для перегляду фільму
            if (user.Age < film.Age_limit)
            {
                return BadRequest("Sorry, you must be at leat " + film.Age_limit + " to be able to watch this movie");
            }
            //перевірка, чи сеанс ще доступний
            if (session.Data < DateTime.Now)
            {
                return NotFound("Session has already started or ended. Unfortunately you can not book the ticket");
            }
            var hall = context.Halls.FirstOrDefault(h => h.Id == session.HallId);
            //перевірка чи є такий зал для цього сеансу
            if (hall is null)
            {
                return NotFound("There is no hall for this session");
            }
            //перевірка чи зал відкритий
            if (hall.Is_available.Equals(0))
            {
                return NotFound("The hall for this session is temporarily closed. You will be informed about any changes in this regard");
            }
            //перевірка чи місця в межах залу
            if (ticketDto.Seat_numbers.Any(s => s < 1 || s > hall.Count_of_seats))
            {
                return BadRequest("Your seat numbers contains invalid numbers. Please check if hall has such seats numbers and try again");
            }
            //перевірка статусу місць
            //отримуємо список номерів місць, які є зайняті
            var unavailable_seats = context.Tickets
                                              .Where(t => t.SessionId == ticketDto.SessionId && ticketDto.Seat_numbers
                                              .Contains(t.Seat_number) && t.Status.ToLower() != "available")
                                              .Select(t => t.Seat_number)
                                              .ToList();
            //якщо хоч одне місце, яке хоче забронювати користувач вже зайняте - видаємо помилку
            if (unavailable_seats.Any())
            {
                return BadRequest("Seat/s: " + string.Join(", ", unavailable_seats) + " are not available. Please, choose other places");
            }

            return Ok();
        }
    }
}
