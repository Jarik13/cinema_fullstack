import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDispatch, useSelector } from 'react-redux';
// import { getUserTickets } from '@/redux/Ticket/Action';

const MyTicketsCard = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket?.tickets || []);

  // useEffect(() => {
  //   dispatch(getUserTickets());
  // }, [dispatch]);

  return (
    <div className="space-y-6">
      {tickets?.length > 0 ? (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {tickets?.map((ticket) => (
              <CarouselItem key={ticket.id}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="font-semibold">{ticket.movieName}</h4>
                  <p className="text-gray-500">Showtime: {ticket.book_buy_data}</p>
                  <p className="text-gray-400">Seat: {ticket.seat_number}</p>
                  <p className="text-green-600 font-semibold">Price: ${ticket.price}</p>
                  <p className={`text-sm font-medium ${ticket.status === 'Available' ? 'text-green-500' : 'text-yellow-500'}`}>
                    Status: {ticket.status}
                  </p>
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
