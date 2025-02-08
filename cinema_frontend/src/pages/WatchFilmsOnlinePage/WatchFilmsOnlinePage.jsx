import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';
import { Button } from '@/components/ui/button';

const WatchFilmsOnlinePage = () => {
    const films = [
        { id: 1, title: 'Inception', ageRating: '16+', price: 120 },
        { id: 2, title: 'Frozen II', ageRating: '6+', price: 100 },
        { id: 3, title: 'Avengers: Endgame', ageRating: '13+', price: 150 },
        { id: 4, title: 'Joker', ageRating: '18+', price: 130 },
        { id: 5, title: 'Toy Story 4', ageRating: '6+', price: 90 },
        { id: 6, title: 'The Matrix', ageRating: '16+', price: 110 },
    ];

    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Watch films online"} navigation={"/"} />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                {films.map(film => (
                    <div
                        key={film.id}
                        className='border rounded-lg shadow-sm p-4 flex flex-col items-center text-center'
                    >
                        <div className='w-full h-40 bg-gray-300 rounded-lg mb-4'></div>
                        <h3 className='text-lg font-semibold mb-2'>{film.title}</h3>
                        <p className='text-sm text-gray-600 mb-2'>Age Rating: {film.ageRating}</p>
                        <p className='text-lg text-gray-800 font-medium mb-4'>$ {film.price}</p>
                        <Button variant="destructive" onClick={() => alert(`You selected ${film.title}`)}>
                            Watch online
                        </Button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WatchFilmsOnlinePage;
