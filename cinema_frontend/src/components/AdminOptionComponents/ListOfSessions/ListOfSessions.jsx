import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import DeleteSessionCard from './DeleteSessionCard/DeleteSessionCard';

const ListOfSessions = () => {
    const [sessions, setSessions] = useState([
        { id: 1, hall: 'Hall 1', film: "Film 1", start_time: "12:00", end_time: "14:00" },
        { id: 2, hall: 'Hall 2', film: "Film 2", start_time: "15:00", end_time: "17:30" },
        { id: 3, hall: 'Hall 3', film: "Film 3", start_time: "18:00", end_time: "20:15" },
        { id: 4, hall: 'Hall 4', film: "Film 4", start_time: "20:30", end_time: "22:45" },
        { id: 5, hall: 'Hall 5', film: "Film 5", start_time: "12:00", end_time: "14:00" },
        { id: 6, hall: 'Hall 6', film: "Film 6", start_time: "15:00", end_time: "17:30" },
        { id: 7, hall: 'Hall 7', film: "Film 7", start_time: "18:00", end_time: "20:15" },
        { id: 8, hall: 'Hall 8', film: "Film 8", start_time: "20:30", end_time: "22:45" },
    ]);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedSessionId, setSelectedSessionId] = useState(null);

    const openDeleteDialog = (sessionId) => {
        setSelectedSessionId(sessionId);
        setIsDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setSelectedSessionId(null);
        setIsDialogOpen(false);
    };

    const deleteSession = () => {
        setSessions(sessions.filter(session => session.id !== selectedSessionId));
        closeDeleteDialog();
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All session list</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-6 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Hall name</div>
                    <div>Film name</div>
                    <div>Start Time</div>
                    <div>End Time</div>
                    <div>Actions</div>
                </div>
                {sessions.map(session => (
                    <div key={session.id} className="grid grid-cols-6 border-t px-4 py-2 items-center">
                        <div>{session.id}</div>
                        <div>{session.hall}</div>
                        <div>{session.film}</div>
                        <div>{session.start_time}</div>
                        <div>{session.end_time}</div>
                        <div className="flex gap-2">
                            <Button variant="outline">Edit</Button>
                            <Button variant="destructive" onClick={() => openDeleteDialog(session.id)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
            
            <DeleteSessionCard
                isOpen={isDialogOpen}
                onClose={closeDeleteDialog}
                onConfirm={deleteSession}
            />
        </div>
    );
};

export default ListOfSessions;
