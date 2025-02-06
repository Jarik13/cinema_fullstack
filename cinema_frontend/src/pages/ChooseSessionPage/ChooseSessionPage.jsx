import DatePicker from '@/components/DatePicker/DatePicker';
import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import Location from '@/components/Location/Location';
import SessionCard from '@/components/SessionCard/SessionCard';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const ChooseSessionPage = () => {
    const [selectedDay, setSelectedDay] = useState("Today");

    const handleDaySelection = (day) => {
        setSelectedDay(day);
        console.log(`Selected day: ${day}`);
    };

    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Choose session"} />

            <div className='flex items-center justify-between p-2 mt-4 border-b-2'>
                <div className='text-2xl'>
                    <h1>Film name</h1>
                </div>
                <div className='flex gap-4 items-center'>
                    <span>Film Rating</span>
                    <span>•</span>
                    <span>Film Release Year</span>
                    <span>•</span>
                    <span>Film Genre</span>
                    <span>•</span>
                    <span>Film Duration</span>
                    <span>•</span>
                    <span>Film Age Rating</span>
                </div>
            </div>

            <div className='p-2 mt-4 flex items-center justify-start gap-4 text-xl'>
                <h2>Search session location: </h2>
                <Location />
            </div>

            <div className='p-2 mt-4 flex items-center justify-start gap-4'>
                <Button
                    variant={selectedDay === "Today" ? "default" : "outline"}
                    onClick={() => handleDaySelection("Today")}
                >
                    Today
                </Button>
                <Button
                    variant={selectedDay === "Tomorrow" ? "default" : "outline"}
                    onClick={() => handleDaySelection("Tomorrow")}
                >
                    Tomorrow
                </Button>
                <DatePicker />
            </div>

            <div className='grid grid-cols-4 gap-10 justify-center'>
                <SessionCard
                    startTime="15:00"
                    endTime="17:00"
                    hallName="Зал 1"
                    availableSeats={301}
                    lowestTicketPrice={400}
                />
                <SessionCard
                    startTime="17:20"
                    endTime="19:20"
                    hallName="Зал 2"
                    availableSeats={194}
                    lowestTicketPrice={450}
                />
                <SessionCard
                    startTime="19:40"
                    endTime="21:40"
                    hallName="Зал 3"
                    availableSeats={150}
                    lowestTicketPrice={420}
                />
                <SessionCard
                    startTime="22:00"
                    endTime="00:00"
                    hallName="Зал 4"
                    availableSeats={120}
                    lowestTicketPrice={380}
                />
                <SessionCard
                    startTime="12:00"
                    endTime="14:00"
                    hallName="Зал 5"
                    availableSeats={250}
                    lowestTicketPrice={410}
                />
                <SessionCard
                    startTime="14:20"
                    endTime="16:20"
                    hallName="Зал 6"
                    availableSeats={175}
                    lowestTicketPrice={390}
                />
            </div>
        </div>
    )
}

export default ChooseSessionPage;