import { useState } from 'react';
import { Button } from '@/components/ui/button';
import EditHallCard from './EditHallCard/EditHallCard';
import DeleteHallCard from './DeleteHallCard/DeleteHallCard';

const ListOfHalls = () => {
    const [halls, setHalls] = useState([
        { id: 1, number: 'Hall 1', seats: 150, isOpen: true },
        { id: 2, number: 'Hall 2', seats: 200, isOpen: true },
        { id: 3, number: 'Hall 3', seats: 250, isOpen: true },
        { id: 4, number: 'Hall 4', seats: 100, isOpen: true },
        { id: 5, number: 'Hall 5', seats: 150, isOpen: true },
        { id: 6, number: 'Hall 6', seats: 200, isOpen: true },
        { id: 7, number: 'Hall 7', seats: 250, isOpen: true },
        { id: 8, number: 'Hall 8', seats: 100, isOpen: true },
    ]);

    const [selectedHall, setSelectedHall] = useState(null);
    const [editHall, setEditHall] = useState({ id: '', number: '', seats: '' });
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);

    const toggleHallStatus = (id) => {
        setHalls(halls.map(hall =>
            hall.id === id ? { ...hall, isOpen: !hall.isOpen } : hall
        ));
    };

    const openEditModal = (hall) => {
        setSelectedHall(hall);
        setEditHall({ id: hall.id, number: hall.number, seats: hall.seats });
        setIsEditOpen(true);
    };

    const openDeleteModal = (hall) => {
        setSelectedHall(hall);
        setIsDeleteOpen(true);
    };

    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setEditHall(prev => ({ ...prev, [name]: value }));
    };

    const saveChanges = () => {
        setHalls(halls.map(hall =>
            hall.id === editHall.id ? { ...hall, number: editHall.number, seats: Number(editHall.seats) } : hall
        ));
        setIsEditOpen(false);
    };

    const deleteHall = () => {
        setHalls(halls.filter(hall => hall.id !== selectedHall.id));
        setIsDeleteOpen(false);
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All hall list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-5 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Hall number</div>
                    <div>Seats</div>
                    <div>Status</div>
                    <div>Actions</div>
                </div>
                {halls.map(hall => (
                    <div key={hall.id} className="grid grid-cols-5 border-t px-4 py-2 items-center">
                        <div>{hall.id}</div>
                        <div>{hall.number}</div>
                        <div>{hall.seats}</div>
                        <div className={hall.isOpen ? "text-green-600" : "text-red-600"}>
                            {hall.isOpen ? "Open" : "Close"}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => toggleHallStatus(hall.id)}>
                                {hall.isOpen ? "Close" : "Open"}
                            </Button>
                            <Button variant="outline" onClick={() => openEditModal(hall)}>Edit</Button>
                            <Button variant="destructive" onClick={() => openDeleteModal(hall)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>

            <EditHallCard
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                editHall={editHall}
                onChange={handleEditChange}
                onSave={saveChanges}
            />

            <DeleteHallCard
                isOpen={isDeleteOpen}
                onClose={() => setIsDeleteOpen(false)}
                onConfirm={deleteHall}
                hallName={selectedHall?.number}
            />
        </div>
    );
};

export default ListOfHalls;
