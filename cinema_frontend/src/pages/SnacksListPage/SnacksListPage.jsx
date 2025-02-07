import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';

const SnacksListPage = () => {
    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Choose your favourite snacks"} navigation={"/1/sessions/1"} />
        </div>
    )
}

export default SnacksListPage;