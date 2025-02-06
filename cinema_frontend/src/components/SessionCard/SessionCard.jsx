import React from 'react';

const SessionCard = ({ startTime, endTime, hallName, availableSeats, lowestTicketPrice }) => {
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

    const maxSeats = Math.max(...rows.map(row => row.length));

    return (
        <div className="text-black p-4 rounded-md shadow-md w-80 border border-white relative">
            <div className="flex justify-between text-sm mb-2">
                <span>{startTime} - {endTime}</span>
                <span>{hallName}</span>
            </div>
            <div className="bg-gray-200 text-center py-4 rounded-md border border-white">
                <div className="flex flex-col justify-center items-center space-y-1">
                    {rows.map((row, rowIndex) => {
                        const emptySeats = Math.floor((maxSeats - row.length) / 2);

                        return (
                            <div key={rowIndex} className="flex justify-center gap-1">
                                {Array.from({ length: emptySeats }, (_, i) => (
                                    <div key={`empty-${rowIndex}-${i}`} className="w-1 h-1 opacity-0"></div>
                                ))}
                                {row.map((seat, i) => (
                                    <div
                                        key={i}
                                        className="w-1 h-1 flex items-center justify-center border rounded-sm bg-gray-800 text-white"
                                    ></div>
                                ))}
                                {Array.from({ length: emptySeats }, (_, i) => (
                                    <div key={`empty-right-${rowIndex}-${i}`} className="w-1 h-1 opacity-0"></div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="text-center text-sm mt-2">
                <span>Places left {availableSeats} from {lowestTicketPrice} UAH</span>
            </div>
        </div>
    );
};

export default SessionCard;
