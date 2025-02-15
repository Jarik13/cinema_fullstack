import { Button } from '@/components/ui/button';
import { getUserTickets } from '@/redux/Ticket/Action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListOfTickets = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(store => store.ticket?.tickets || []);
    console.log(tickets);
    useEffect(() => {
        dispatch(getUserTickets());
    }, [dispatch])

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Ticket List</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>User email</div>
                    <div>Hall name</div>
                    <div>Status</div>
                    <div>Seat number</div>
                    <div>Price</div>
                </div>
                {tickets.map(ticket => (
                    <div key={ticket.id} className="grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] border-t px-4 py-2 items-center">
                        <div>{ticket.id}</div>
                        <div className="truncate">{ticket.user}</div>
                        <div>{ticket.hall}</div>
                        <div
                            className={`${ticket.status === "Bought" ? "text-gray-800" : "text-yellow-500"}`}>
                            {ticket.status}
                        </div>
                        <div>{ticket.seat_number}</div>
                        <div>{ticket.price}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListOfTickets;