import { Button } from '@/components/ui/button';
import React, { useEffect, useState } from 'react';
import EditFilmCard from './EditFilmCard/EditFilmCard';
import DeleteFilmCard from './DeleteFilmCard/DeleteFilmCard';
import { useDispatch } from 'react-redux';
import { updateFilm } from '@/redux/Film/Action';

const ListOfFilms = () => {
    const dispatch = useDispatch();

    const [films, setFilms] = useState([
        {
            id: 1,
            imageUrl: "https://uk.wikipedia.org/wiki/%D0%9A%D1%96%D1%82#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Felis_silvestris_silvestris.jpg",
            name: 'Film 1',
            description: "Description 1",
            releaseYear: 2000,
            ageRating: "10+",
            genres: ["Genre 1", "Genre 2"]
        },
    ]);

    const [editingFilm, setEditingFilm] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedFilmId, setSelectedFilmId] = useState(null);

    const handleEditClick = (film) => {
        setEditingFilm(film);
    };

    const handleCloseModal = () => {
        setEditingFilm(null);
    };

    const generatePatches = (oldFilm, newFilm) => {
        const patches = [];

        if (oldFilm.name !== newFilm.name) {
            patches.push({ op: "replace", path: "/name", value: newFilm.name });
        }

        if (oldFilm.description !== newFilm.description) {
            patches.push({ op: "replace", path: "/description", value: newFilm.description });
        }

        if (oldFilm.releaseYear !== newFilm.releaseYear) {
            patches.push({ op: "replace", path: "/releaseyear", value: String(newFilm.releaseYear) });
        }

        if (JSON.stringify(oldFilm.genres) !== JSON.stringify(newFilm.genres)) {
            patches.push({ op: "replace", path: "/genres", value: "Drama" }); // here need to update !!!!!!!!
        }

        return patches;
    };

    const handleSaveFilm = (updatedFilm) => {
        const patches = generatePatches(editingFilm, updatedFilm);
        if (patches.length > 0) {
            dispatch(updateFilm("DFFEEBD4-16C0-42D4-2773-08DD4C638A21", patches)); // here need to update !!!!!!!!
        }

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

    const openDeleteDialog = (filmId) => {
        setSelectedFilmId(filmId);
        setIsDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setSelectedFilmId(null);
        setIsDialogOpen(false);
    };

    const deleteFilm = () => {
        setFilms(films.filter(film => film.id !== selectedFilmId));
        setIsDialogOpen(false);
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All film list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-8 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Image</div>
                    <div>Film name</div>
                    <div>Film description</div>
                    <div>Release year</div>
                    <div>Age rating</div>
                    <div>Genres</div>
                    <div>Actions</div>
                </div>
                {films.map((film) => (
                    <div key={film.id} className="grid grid-cols-8 px-4 py-2 border-t">
                        <div>{film.id}</div>
                        <div>
                            <img src={film.imageUrl} alt="Film" className="w-20 h-20 object-cover" />
                        </div>
                        <div>{film.name}</div>
                        <div>{film.description}</div>
                        <div>{film.releaseYear}</div>
                        <div>{film.ageRating}</div>
                        <div className="grid grid-cols-1 gap-4">
                            {film.genres?.map((genre, index) => (
                                <div key={index} className="w-20 px-3 py-1 text-[12px] shadow-lg rounded-lg bg-white">{genre}</div>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => handleEditClick(film)}>Edit</Button>
                            <Button variant="destructive" onClick={() => openDeleteDialog(film.id)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>

            {editingFilm && (
                <EditFilmCard
                    film={editingFilm}
                    onSave={handleSaveFilm}
                    onClose={handleCloseModal}
                />
            )}

            <DeleteFilmCard
                isOpen={isDialogOpen}
                onClose={closeDeleteDialog}
                onConfirm={deleteFilm}
                filmName={films.find(film => film.id === selectedFilmId)?.name || 'Unknown Film'}
            />
        </div>
    )
}

export default ListOfFilms;
