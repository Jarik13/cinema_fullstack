import React from 'react';
import SessionsList from './SessionsList/SessionsList';

const SessionCard = ({ startTime, endTime, hallName, availableSeats, lowestTicketPrice }) => {
    return (
        <div className="text-black p-4 rounded-md shadow-md w-80 border border-white relative">
            <div className="flex justify-between text-sm mb-2">
                <span>{startTime} - {endTime}</span>
                <span>{hallName}</span>
            </div>
            <div className="bg-gray-200 text-center py-4 rounded-md border border-white">
                <SessionsList />
            </div>
            <div className="text-center text-sm mt-2">
                <span>Places left {availableSeats} from {lowestTicketPrice} UAH</span>
            </div>
        </div>
    );
};

export default SessionCard;
