import React, { useState } from 'react';

const ListOfFilms = () => {
    const [films, setFilms] = useState([
        {
            id: 1,
            name: 'Film 1',
            description: "Description 1",
            release_year: 2000,
            genres: ["Genre 1", "Genre 2"]
        },
        {
            id: 2,
            name: 'Film 2',
            description: "Description 2",
            release_year: 1990,
            genres: ["Genre 2", "Genre 3"]
        },
        {
            id: 3,
            name: 'Film 3',
            description: "Description 3",
            release_year: 2025,
            genres: ["Genre 1"]
        },
        {
            id: 4,
            name: 'Film 4',
            description: "Description 4",
            release_year: 2020,
            genres: ["Genre 1", "Genre 2", "Genre 3"]
        },
    ]);

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All film list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-5 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Film name</div>
                    <div>Film description</div>
                    <div>Release year</div>
                    <div>Genres</div>
                </div>
                
            </div>
        </div>
    )
}

export default ListOfFilms;