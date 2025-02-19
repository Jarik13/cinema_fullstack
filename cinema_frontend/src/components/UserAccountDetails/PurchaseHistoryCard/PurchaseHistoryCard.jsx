import React, { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useDispatch, useSelector } from 'react-redux';
import { getUserFilmHistory } from '@/redux/History/Action';

const formatDate = (dateString) => {
  if (!dateString) return "N/A";
  return dateString.split("T")[0]; 
};

const formatTime = (dateString) => {
  if (!dateString) return "N/A";
  return dateString.split("T")[1].slice(0, 5);
};

const PurchaseHistoryCard = () => {
  const dispatch = useDispatch();
  const purchases = useSelector(store => store.history?.histories || []);

  useEffect(() => {
    dispatch(getUserFilmHistory());
  }, [dispatch]);

  return (
    <div>
      {purchases.length > 0 ? (
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {purchases.map((purchase) => (
              <CarouselItem key={purchase.id}>
                <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold">Film: {purchase?.filmName}</h3>
                  <p className="text-gray-500">Buy at: {formatTime(purchase?.ActionDate)}</p>
                  <p className="text-gray-500">Date: {formatDate(purchase?.ActionDate)}</p>
                  <p className="text-gray-500">Amount: $150</p>
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
