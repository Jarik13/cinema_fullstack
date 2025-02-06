import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const MyTicketsCard = () => {
  const tickets = [
    { id: 1, movieName: 'Movie A', showtime: '2025-02-07 18:30', seat: 'A1' },
    { id: 2, movieName: 'Movie B', showtime: '2025-02-08 20:00', seat: 'B12' },
    { id: 3, movieName: 'Movie C', showtime: '2025-02-09 15:45', seat: 'C8' },
  ];

  return (
    <div className="space-y-6">
      {tickets.length > 0 ? (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {tickets.map((ticket) => (
              <CarouselItem key={ticket.id}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold">{ticket.movieName}</h4>
                  <p className="text-gray-500">Showtime: {ticket.showtime}</p>
                  <p className="text-gray-400">Seat: {ticket.seat}</p>
                  <button className="text-blue-500 hover:underline mt-4">View Details</button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p>No tickets booked yet.</p>
      )}
    </div>
  );
};

export default MyTicketsCard;
