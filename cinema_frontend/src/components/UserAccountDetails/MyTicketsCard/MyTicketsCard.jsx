import React, { useEffect, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDispatch, useSelector } from 'react-redux';
import { cancelTickets, getUserTickets } from '@/redux/Ticket/Action';
import { Button } from '@/components/ui/button';

const MyTicketsCard = () => {
  const dispatch = useDispatch();
  const tickets = useSelector((state) => state.ticket?.tickets || []);
  const isFirstLoad = useRef(true);

  useEffect(() => {
    dispatch(getUserTickets(isFirstLoad.current));
    isFirstLoad.current = false;
  }, [dispatch]);

  const handleCancelTickets = async (id) => {
    await dispatch(cancelTickets([id]));
    await dispatch(getUserTickets(false));
  }

  return (
    <div className="space-y-6">
      {tickets?.length > 0 ? (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {tickets?.map((ticket) => (
              <CarouselItem key={ticket?.Id}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl">{ticket?.FilmName}</h4>
                  <p className="text-gray-500">Showtime: {ticket?.Book_buy_data}</p>
                  <p className="text-gray-400">Seat: {ticket?.Seat_number}</p>
                  <p className="text-green-600 font-semibold">Price: ${ticket?.Price}</p>
                  <p className={`text-sm font-medium ${ticket?.Status === 'Booked' ? 'text-blue-500' : 'text-yellow-500'}`}>
                    Status: {ticket?.Status}
                  </p>
                  <Button variant="destructive" className="mt-4" onClick={() => handleCancelTickets(ticket.Id)}>Cancel</Button>
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
