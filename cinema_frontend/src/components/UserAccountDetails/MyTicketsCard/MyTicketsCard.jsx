import React from 'react';

const MyTicketsCard = () => {
  const tickets = [
    { id: 1, movieName: 'Movie A', showtime: '2025-02-07 18:30', seat: 'A1' },
    { id: 2, movieName: 'Movie B', showtime: '2025-02-08 20:00', seat: 'B12' },
    { id: 3, movieName: 'Movie C', showtime: '2025-02-09 15:45', seat: 'C8' },
  ];

  return (
    <div className="space-y-6">
      {tickets.length > 0 ? (
        <ul className="space-y-4">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-lg">
              <div>
                <h4 className="font-semibold">{ticket.movieName}</h4>
                <p className="text-gray-500">Showtime: {ticket.showtime}</p>
                <p className="text-gray-400">Seat: {ticket.seat}</p>
              </div>
              <button className="text-blue-500 hover:underline">View Details</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tickets booked yet.</p>
      )}
    </div>
  );
};

export default MyTicketsCard;
