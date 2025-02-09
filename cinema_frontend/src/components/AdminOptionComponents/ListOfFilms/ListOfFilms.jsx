import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import EditFilmCard from './EditFilmCard/EditFilmCard';

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

    const [editingFilm, setEditingFilm] = useState(null);

    const handleEditClick = (film) => {
        setEditingFilm(film);
    };

    const handleCloseModal = () => {
        setEditingFilm(null);
    };

    const handleSaveFilm = (updatedFilm) => {
        setFilms(prevFilms =>
            prevFilms.map(film =>
                film.id === updatedFilm.id ? updatedFilm : film
            )
        );
        handleCloseModal();
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                handleCloseModal();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All film list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-6 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Film name</div>
                    <div>Film description</div>
                    <div>Release year</div>
                    <div>Genres</div>
                    <div>Actions</div>
                </div>
                {films.map((film) => (
                    <div key={film.id} className="grid grid-cols-6 px-4 py-2 border-t">
                        <div>{film.id}</div>
                        <div>{film.name}</div>
                        <div>{film.description}</div>
                        <div>{film.release_year}</div>
                        <div className="grid grid-cols-1 gap-4">
                            {film.genres?.map((genre, index) => (
                                <div key={index} className="w-20 px-3 py-1 text-[12px] shadow-lg rounded-lg bg-white">{genre}</div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => handleEditClick(film)}>Edit</Button>
                            <Button variant="destructive">Delete</Button>
                        </div>
                    </div>
                ))}
            </div>

            {editingFilm && (
                <EditFilmCard
                    session={editingFilm}
                    onSave={handleSaveFilm}  
                    onClose={handleCloseModal}
                />
            )}
        </div>
    )
}

export default ListOfFilms;