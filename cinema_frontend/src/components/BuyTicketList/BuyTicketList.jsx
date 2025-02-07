import React from 'react';
import { MapPinCheckIcon, TicketCheckIcon } from 'lucide-react';
import { Button } from '../ui/button';

const BuyTicketList = ({ selectedSeats }) => {
    const tickets = selectedSeats.map((seatNumber) => {
        const row = Math.floor(seatNumber / 10) + 1;
        const seat = seatNumber % 10 + 1;
        return { row, seat, price: 150 };
    });

    const removeTicket = (index) => {
        tickets.splice(index, 1);
    };

    const totalTickets = tickets.length;
    const totalPrice = tickets.reduce((sum, ticket) => sum + ticket.price, 0);

    return (
        <div className='flex flex-col w-1/4 gap-8 p-2'>
            <div className='flex flex-col gap-4 text-xl'>
                <div className='flex items-center gap-2'>
                    <MapPinCheckIcon className='w-5 h-5 text-gray-500' />
                    <h3>Lviv, Forum</h3>
                </div>
                <div className='flex items-center gap-2'>
                    <TicketCheckIcon className='w-5 h-5 text-gray-500' />
                    <h3>From 10+</h3>
                </div>
            </div>

            <div className='flex flex-col gap-4'>
                {tickets.map((ticket, index) => (
                    <div key={index} className='flex justify-between items-center border-b pb-2'>
                        <div>
                            <h4>Row: {ticket.row}, Seat: {ticket.seat}</h4>
                        </div>
                        <div className='flex items-center gap-2'>
                            <h4 className='font-bold'>${ticket.price}</h4>
                            <Button
                                variant="ghost"
                                className='text-red-500 hover:text-red-700'
                                onClick={() => removeTicket(index)}
                            >
                                X
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {tickets.length > 0
                ? (
                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center justify-between text-xl'>
                            <h4>Total Tickets: {totalTickets}</h4>
                            <h4>Total Price: ${totalPrice}</h4>
                        </div>
                        <Button
                            variant="destructive"
                            onClick={() => alert('Proceeding to payment...')}
                        >
                            Proceed to Payment
                        </Button>
                    </div>
                )
                :
                <div className='text-center text-xl p-10 border-t-2 border-b-2'>
                    <h3>Your tickets here!</h3>
                </div>
            }
        </div>
    );
};

export default BuyTicketList;
