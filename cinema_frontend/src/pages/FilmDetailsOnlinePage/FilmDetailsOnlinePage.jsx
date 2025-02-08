import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';

const FilmDetailsOnlinePage = () => {
    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Watch film online"} navigation={"/watch-online"} />
        </div>
    )
}

export default FilmDetailsOnlinePage;