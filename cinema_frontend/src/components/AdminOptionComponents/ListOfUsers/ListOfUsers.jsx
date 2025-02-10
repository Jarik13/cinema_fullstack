import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const ListOfUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "yaroslav", email: "yaroslav@gmail.com", age: 18 },
        { id: 2, name: "katya", email: "katya@gmail.com", age: 19 },
        { id: 3, name: "roksolana", email: "roksolana@gmail.com", age: 19 },
    ]);

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Ticket List</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-[1fr_1fr_2fr_1fr_0.5fr] bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Name</div>
                    <div>Email</div>
                    <div>Age</div>
                    <div>Action</div>
                </div>
                {users.map(user => (
                    <div key={user.id} className="grid grid-cols-[1fr_1fr_2fr_1fr_0.5fr] border-t px-4 py-2 items-center">
                        <div>{user.id}</div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                        <div>{user.age}</div>
                        <Button variant="destructive">Block</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListOfUsers;