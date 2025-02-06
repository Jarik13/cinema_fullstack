import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";  

const MyPaymentCardsCard = () => {
    const paymentCards = [
        { id: 1, cardType: 'Visa', last4Digits: '1234', expirationDate: '12/25' },
        { id: 2, cardType: 'MasterCard', last4Digits: '5678', expirationDate: '10/23' },
        { id: 3, cardType: 'American Express', last4Digits: '9012', expirationDate: '08/24' },
    ];

    return (
        <div className="space-y-6">
            {paymentCards.length > 0 ? (
                <Carousel className="w-full max-w-xs">
                    <CarouselContent>
                        {paymentCards.map((card) => (
                            <CarouselItem key={card.id}>
                                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                                    <h4 className="font-semibold">{card.cardType}</h4>
                                    <p className="text-gray-500">**** **** **** {card.last4Digits}</p>
                                    <p className="text-gray-400">Expiration Date: {card.expirationDate}</p>
                                    <button className="text-blue-500 hover:underline mt-4">Edit</button>
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
