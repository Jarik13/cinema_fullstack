import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import Location from '@/components/Location/Location';
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

            <div className='p-2 mt-4'>
                <div className='flex items-center justify-start gap-4 text-xl'>
                    <h2>Search session location: </h2>
                    <Location />
                </div>
                <div className='flex items-center justify-start gap-4'>
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
                </div>
            </div>
        </div>
    )
}

export default ChooseSessionPage;