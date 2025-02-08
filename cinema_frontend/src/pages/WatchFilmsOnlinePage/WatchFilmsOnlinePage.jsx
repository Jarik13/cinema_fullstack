import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';

const WatchFilmsOnlinePage = () => {
    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Watch films online"} navigation={"/"} />
        </div>
    );
}

export default WatchFilmsOnlinePage;