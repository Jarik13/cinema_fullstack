import { getHallById, getHallList } from '@/redux/Hall/Action';
import { getSessionList } from '@/redux/Session/Action';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const SeatsList = ({ selectedSeats, setSelectedSeats, sessionId }) => {
  const dispatch = useDispatch();
  const sessions = useSelector(store => store.session?.sessions);
  const halls = useSelector(store => store.hall?.halls);

  const session = sessions?.find(s => s.Id === sessionId);

  useEffect(() => {
    dispatch(getHallList(false));
    dispatch(getSessionList(false));
  }, [dispatch]);

  const hall = halls?.find(h => h.Id === session?.HallId);

  const countOfSeats = hall?.Count_of_seats || 0;
  const rows = [];
  let seatCount = 0;

  const rowSizes = [15, 24, 29];
  for (let i = 0; i < rowSizes.length; i++) {
    let row = [];
    for (let j = 0; j < rowSizes[i]; j++) {
      if (seatCount < countOfSeats) {
        row.push(seatCount);
        seatCount++;
      }
    }
    rows.push(row);
  }

  while (seatCount < countOfSeats) {
    let row = [];
    for (let i = 0; i < 29; i++) {
      if (seatCount < countOfSeats) {
        row.push(seatCount);
        seatCount++;
      }
    }
    rows.push(row);
  }

  const handleSeatClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
  };

  const maxSeats = Math.max(...rows.map((row) => row.length));

  return (
    <>
      <div className="flex flex-col justify-center items-center space-y-1">
        {rows.map((row, rowIndex) => {
          const emptySeats = Math.floor((maxSeats - row.length) / 2);

          return (
            <div key={rowIndex} className="flex justify-center gap-1">
              {Array.from({ length: emptySeats }, (_, i) => (
                <div
                  key={`empty-${rowIndex}-${i}`}
                  className="w-8 h-8 opacity-0"
                ></div>
              ))}
              {row.map((_, colIndex) => {
                const currentSeat = rowIndex * 100 + colIndex + 100;
                return (
                  <div
                    key={currentSeat}
                    onClick={() => handleSeatClick(currentSeat)}
                    className={`w-8 h-8 flex items-center justify-center border cursor-pointer rounded-sm text-white hover:border-4 hover:border-yellow-500 ${selectedSeats.includes(currentSeat) ? 'bg-yellow-500' : 'bg-gray-400'
                      }`}
                  >
                    {currentSeat + 1}
                  </div>
                );
              })}
              {Array.from({ length: emptySeats }, (_, i) => (
                <div
                  key={`empty-right-${rowIndex}-${i}`}
                  className="w-8 h-8 opacity-0"
                ></div>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center gap-5">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-sm bg-gray-400"></div>
          <h3>-</h3>
          <h3>Free</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-sm bg-yellow-500"></div>
          <h3>-</h3>
          <h3>Selected</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-sm bg-gray-800"></div>
          <h3>-</h3>
          <h3>Bought</h3>
        </div>
      </div>
    </>
  );
};

export default SeatsList;
