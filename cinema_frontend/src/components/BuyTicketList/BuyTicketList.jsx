import React from 'react';
import { MapPinCheckIcon, TicketCheckIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BuyTicketList = ({ selectedSeats, setSelectedSeats }) => {
    const params = useParams();
    const navigate = useNavigate();
    const selectedLocation = useSelector(store => store.location?.selectedLocation || null);

    const tickets = selectedSeats.map((ticket) => {
        return {
            row: Math.floor(ticket.Seat_number / 100),
            seat: (ticket.Seat_number % 100),
            price: ticket.Price,
            id: ticket.Seat_number,
        };
    });

    const removeTicket = (id) => {
        setSelectedSeats(prevSeats => {
            const updatedSeats = prevSeats.filter(ticket => ticket.Seat_number !== id);
            return updatedSeats;
        });
    };

    const totalTickets = tickets.length;
    const totalPrice = tickets.reduce((sum, ticket) => sum + ticket.price, 0);

    return (
        <div className='flex flex-col w-1/4 gap-8 p-2'>
            <div className='flex flex-col gap-4 text-xl'>
                <div className='flex items-center gap-2'>
                    <MapPinCheckIcon className='w-5 h-5 text-gray-500' />
                    <h3>{selectedLocation?.label || "No location selected"}</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <TicketCheckIcon className='w-5 h-5 text-gray-500' />
                    <h3>From 10+</h3>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                {tickets.map((ticket) => (
                    <div key={ticket.id} className='flex justify-between items-center border-b pb-2'>
                        <div>
                            <h4>Row: {ticket.row}, Seat: {ticket.seat}</h4>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h4 className='font-bold'>${ticket.price}</h4>
                            <Button
                                variant="ghost"
                                className='text-red-500 hover:text-red-700'
                                onClick={() => removeTicket(ticket.id)}
                            >
                                X
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {tickets.length > 0 ? (
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between text-xl'>
                        <h4>Total Tickets: {totalTickets}</h4>
                        <h4>Total Price: ${totalPrice}</h4>
                    </div>
                    <Button
                        variant="destructive"
                        onClick={() => navigate(`/${params.locationId}/sessions/${params.sessionId}/snacks`)}
                    >
                        Proceed to Payment
                    </Button>
                </div>
            ) : (
                <div className='text-center text-xl p-10 border-t-2 border-b-2'>
                    <h3>Your tickets here!</h3>
                </div>
            )}
        </div>
    );
};

export default BuyTicketList;
