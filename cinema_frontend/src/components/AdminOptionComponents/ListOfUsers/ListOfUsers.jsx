import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import BlockUserCard from './BlockUserCard/BlockUserCard';

const ListOfUsers = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "yaroslav", email: "yaroslav@gmail.com", age: 18 },
        { id: 2, name: "katya", email: "katya@gmail.com", age: 19 },
        { id: 3, name: "roksolana", email: "roksolana@gmail.com", age: 19 },
    ]);
    const [selectedUser, setSelectedUser] = useState(null);

    const handleBlockClick = (user) => {
        setSelectedUser(user);
    };

    const handleConfirmBlock = () => {
        setUsers(users.filter(user => user.id !== selectedUser.id));
        setSelectedUser(null);
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Users List</p>
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
                        <Button variant="destructive" onClick={() => handleBlockClick(user)}>Block</Button>
                    </div>
                ))}
            </div>

            {selectedUser && (
                <BlockUserCard
                    isOpen={!!selectedUser}
                    onClose={() => setSelectedUser(null)}
                    onConfirm={handleConfirmBlock}
                    name={selectedUser.name}
                />
            )}
        </div>
    );
}

export default ListOfUsers;
