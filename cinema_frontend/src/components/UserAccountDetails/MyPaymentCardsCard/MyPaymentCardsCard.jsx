import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDispatch, useSelector } from 'react-redux';
import { getUserTicketHistory } from '@/redux/History/Action';

const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return dateString.split("T")[0];
};

const formatTime = (dateString) => {
    if (!dateString) return "N/A";
    return dateString.split("T")[1].slice(0, 5);
};

const MyPaymentCardsCard = () => {
    const dispatch = useDispatch();
    const tickets = useSelector(store => store.history?.histories || []);

    useEffect(() => {
        dispatch(getUserTicketHistory());
    }, [dispatch])

    console.log(tickets);

    return (
        <div className="space-y-6">
            {tickets.length > 0 ? (
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {tickets.map((ticket) => (
                            <CarouselItem key={ticket?.Id}>
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
                                    <h3 className="text-xl font-semibold text-black">🎬 Film: <span className="text-indigo-600">{ticket?.filmName}</span></h3>
                                    <p className="text-gray-600">🛒 Buy at: <span className="text-black">{formatTime(ticket?.actionDate)}</span></p>
                                    <p className="text-gray-600">📅 Date: <span className="text-black">{formatDate(ticket?.actionDate)}</span></p>
                                    <p className="text-gray-600">💰 Amount: <span className="text-red-500 font-semibold">${ticket?.price}</span></p>
                                    <p className="text-gray-600">🎟️ Seat number: <span className="text-black">{ticket?.seat_number}</span></p>
                                    <p className="text-gray-600">🏷️ Type: <span >{ticket?.type}</span></p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            ) : (
                <p>No payment cards saved yet.</p>
            )}
        </div>
    );
};

export default MyPaymentCardsCard;
