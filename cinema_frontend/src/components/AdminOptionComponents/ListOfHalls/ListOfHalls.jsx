import { Button } from '@/components/ui/button';
import React from 'react';

const ListOfHalls = () => {
    const halls = [
        { id: 1, name: 'Зал 1', seats: 150 },
        { id: 2, name: 'Зал 2', seats: 200 },
        { id: 3, name: 'Зал 3', seats: 250 },
        { id: 4, name: 'Зал 4', seats: 100 },
        { id: 5, name: 'Зал 1', seats: 150 },
        { id: 6, name: 'Зал 2', seats: 200 },
        { id: 7, name: 'Зал 3', seats: 250 },
        { id: 8, name: 'Зал 4', seats: 100 },
    ];

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All hall list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-4 bg-gray-100 font-bold px-4 py-2'>
                    <div>Id</div>
                    <div>Hall name</div>
                    <div>Seats count</div>
                    <div>Action</div>
                </div>
                {halls.map((hall) => (
                    <div key={hall.id} className="grid grid-cols-4 border-t px-4 py-2 items-center">
                        <div>{hall.id}</div>
                        <div>{hall.name}</div>
                        <div>{hall.seats}</div>
                        <div className="flex gap-4 text-center">
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
