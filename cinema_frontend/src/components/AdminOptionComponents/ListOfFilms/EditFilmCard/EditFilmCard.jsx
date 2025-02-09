import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const EditFilmCard = ({ film, onSave, onClose }) => {
    const form = useForm({
        defaultValues: {
            name: film?.name || "",
            description: film?.description || "",
            release_year: film?.release_year || 1930,
            image_url: film?.image_url || "",
            genres: film?.genres || [],
        },
        mode: "onChange",
    });

    const { handleSubmit } = form;
    const modalRef = useRef(null);

    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    const onSubmit = (data) => {
        console.log(data);
        const updatedFilm = { ...film, ...data };
        onSave(updatedFilm);
    };

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={handleClickOutside}
        >
            <div
                ref={modalRef}
                className="p-4 border rounded-lg bg-gray-50 w-1/3"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-4">Edit Film</h2>
            </div>
        </div>
    )
}

export default EditFilmCard;