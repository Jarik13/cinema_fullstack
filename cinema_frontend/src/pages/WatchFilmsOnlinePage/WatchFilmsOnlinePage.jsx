import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const WatchFilmsOnlinePage = () => {
    const films = [
        { id: 1, title: 'Inception', ageRating: '16+', price: 120 },
        { id: 2, title: 'Frozen II', ageRating: '6+', price: 100 },
        { id: 3, title: 'Avengers: Endgame', ageRating: '13+', price: 150 },
        { id: 4, title: 'Joker', ageRating: '18+', price: 130 },
        { id: 5, title: 'Toy Story 4', ageRating: '6+', price: 90 },
        { id: 6, title: 'The Matrix', ageRating: '16+', price: 110 },
        { id: 7, title: 'Interstellar', ageRating: '13+', price: 140 },
        { id: 8, title: 'Shrek', ageRating: '6+', price: 80 },
        { id: 9, title: 'The Lion King', ageRating: '6+', price: 95 },
        { id: 10, title: 'Parasite', ageRating: '18+', price: 125 },
        { id: 11, title: 'Coco', ageRating: '6+', price: 100 },
        { id: 12, title: 'Black Panther', ageRating: '13+', price: 115 },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const totalPages = Math.ceil(films.length / itemsPerPage);

    const indexOfLastFilm = currentPage * itemsPerPage;
    const indexOfFirstFilm = indexOfLastFilm - itemsPerPage;
    const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='flex flex-col w-full p-4'>
            <div className='flex justify-between items-center'>
                <GoToHomePage message={"Watch films online"} navigation={"/"} />

                <div className='flex justify-end mb-4 '>
                    <div className='flex gap-2 items-center'>
                        <Button
                            variant="outline"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Prev
                        </Button>
                        <span className='text-sm'>
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button
                            variant="outline"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {currentFilms.map((film) => (
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
