import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const ListOfHalls = () => {
    const [halls, setHalls] = useState([
        { id: 1, name: 'Зал 1', seats: 150, isOpen: true },
        { id: 2, name: 'Зал 2', seats: 200, isOpen: true },
        { id: 3, name: 'Зал 3', seats: 250, isOpen: true },
        { id: 4, name: 'Зал 4', seats: 100, isOpen: true },
        { id: 5, name: 'Зал 5', seats: 150, isOpen: true },
        { id: 6, name: 'Зал 6', seats: 200, isOpen: true },
        { id: 7, name: 'Зал 7', seats: 250, isOpen: true },
        { id: 8, name: 'Зал 8', seats: 100, isOpen: true },
    ]);

    const toggleHallStatus = (id) => {
        setHalls((prevHalls) =>
            prevHalls.map((hall) =>
                hall.id === id ? { ...hall, isOpen: !hall.isOpen } : hall
            )
        );
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All hall list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-5 bg-gray-100 font-bold px-4 py-2'>
                    <div>Id</div>
                    <div>Hall name</div>
                    <div>Seats count</div>
                    <div>Status</div>
                    <div>Action</div>
                </div>
                {halls.map((hall) => (
                    <div key={hall.id} className="grid grid-cols-5 border-t px-4 py-2 items-center">
                        <div>{hall.id}</div>
                        <div>{hall.name}</div>
                        <div>{hall.seats}</div>
                        <div className={hall.isOpen ? "text-green-600" : "text-red-600"}>
                            {hall.isOpen ? "Open" : "Closed"}
                        </div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => toggleHallStatus(hall.id)}>
                                {hall.isOpen ? "Close" : "Open"}
                            </Button>
                            <Button variant="outline">Edit</Button>
                            <Button variant="destructive">Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListOfHalls;
