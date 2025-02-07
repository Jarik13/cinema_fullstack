import React, { useState } from 'react';
import { MapPinCheckIcon, TicketCheckIcon } from 'lucide-react';
import { Button } from '../ui/button';

const BuyTicketList = () => {
    const [tickets, setTickets] = useState([
        { row: 1, seat: 5, price: 150 },
        { row: 2, seat: 8, price: 200 },
        { row: 3, seat: 3, price: 180 },
        { row: 4, seat: 10, price: 220 },
        { row: 5, seat: 5, price: 150 },
        { row: 6, seat: 8, price: 200 },
        { row: 7, seat: 3, price: 180 },
        { row: 8, seat: 10, price: 220 },
    ]);

    const removeTicket = (index) => {
        const updatedTickets = tickets.filter((_, i) => i !== index);
        setTickets(updatedTickets);
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
        </div>
    );
}

export default BuyTicketList;
