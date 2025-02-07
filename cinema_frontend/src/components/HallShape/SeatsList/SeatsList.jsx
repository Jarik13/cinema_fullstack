import React, { useState } from 'react';

const SeatsList = ({ selectedSeats, setSelectedSeats }) => {
  const rows = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
  ];

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
