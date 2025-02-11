import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const ListOfSnacks = () => {
    const [snacks, setSnacks] = useState([
        { id: 1, name: 'Popcorn', price: 50 },
        { id: 2, name: 'Nachos', price: 70 },
        { id: 3, name: 'Soda', price: 40 },
        { id: 4, name: 'Candy', price: 30 },
        { id: 5, name: 'Chips', price: 60 },
        { id: 6, name: 'Ice Cream', price: 90 },
        { id: 7, name: 'Chocolate Bar', price: 55 },
        { id: 8, name: 'Hot Dog', price: 100 },
        { id: 9, name: 'Muffin', price: 25 },
        { id: 10, name: 'Cupcake', price: 35 },
        { id: 11, name: 'Burger', price: 110 },
        { id: 12, name: 'Fries', price: 40 },
    ]);

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Snack List</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-4 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Name</div>
                    <div>Price</div>
                    <div>Actions</div>
                </div>
                {snacks.map(snack => (
                    <div key={snack.id} className="grid grid-cols-4 border-t px-4 py-2 items-center">
                        <div>{snack.id}</div>
                        <div>{snack.name}</div>
                        <div>{snack.price}</div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => handleEditClick(snack)}>Edit</Button>
                            <Button variant="destructive" onClick={() => openDeleteDialog(snack.id)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListOfSnacks;