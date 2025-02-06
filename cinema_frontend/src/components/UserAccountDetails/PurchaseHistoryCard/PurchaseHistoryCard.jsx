import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const PurchaseHistoryCard = () => {
  const purchases = [
    {
      id: 2,
      title: 'Movie A',
      showtime: '2025-02-05 19:30',
      date: '2025-02-05',
      amount: '$15'
    },
    {
      id: 3,
      title: 'Movie B',
      showtime: '2025-02-06 21:00',
      date: '2025-02-06',
      amount: '$15'
    },
    {
      id: 4,
      title: 'Movie A',
      showtime: '2025-02-05 19:30',
      date: '2025-02-05',
      amount: '$15'
    },
    {
      id: 5,
      title: 'Movie B',
      showtime: '2025-02-06 21:00',
      date: '2025-02-06',
      amount: '$15'
    }
  ];

  return (
    <div>
      {purchases.length > 0 ? (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {purchases.map((purchase) => (
              <CarouselItem key={purchase.id}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">{purchase.title}</h3>
                  <p className="text-gray-500">Showtime: {purchase.showtime}</p>
                  <p className="text-gray-500">Date: {purchase.date}</p>
                  <p className="text-gray-500">Amount: {purchase.amount}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <p>No purchases yet.</p>
      )}
    </div>
  );
};

export default PurchaseHistoryCard;
