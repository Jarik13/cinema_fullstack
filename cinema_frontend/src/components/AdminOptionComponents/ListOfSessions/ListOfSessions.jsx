import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import EditSessionCard from './EditSessionCard/EditSessionCard';
import DeleteSessionCard from './DeleteSessionCard/DeleteSessionCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSessionList } from '@/redux/Session/Action';

const ListOfSessions = () => {
    const dispatch = useDispatch();
    const sessions = useSelector(store => store.session?.sessions);

    const isFirstLoad = useRef(true);

    useEffect(() => {
        dispatch(getSessionList(isFirstLoad.current));
        isFirstLoad.current = false;
    }, [dispatch])

    console.log(sessions);

    const [editingSession, setEditingSession] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [selectedSessionId, setSelectedSessionId] = useState(null);

    const handleEditClick = (session) => {
        setEditingSession(session);
    };

    const handleCloseModal = () => {
        setEditingSession(null);
    };

    const handleSaveSession = (updatedSession) => {
        // here will be updateSession !!!!!!!!!
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

    const openDeleteDialog = (sessionId) => {
        setSelectedSessionId(sessionId);
        setIsDialogOpen(true);
    };

    const closeDeleteDialog = () => {
        setSelectedSessionId(null);
        setIsDialogOpen(false);
    };

    const deleteSession = () => {
        // here will be deleteSession !!!!!!!!!
        closeDeleteDialog();
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Session List</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-6 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Hall number</div>
                    <div>Film name</div>
                    <div>Start Time</div>
                    <div>End Time</div>
                    <div>Actions</div>
                </div>
                {sessions.map(session => (
                    <div key={session.Id} className="grid grid-cols-6 border-t px-4 py-2 items-center">
                        <div>{session.Id}</div>
                        <div>Hall {session.Hall}</div>
                        <div>{session.Film}</div>
                        <div>{session.Start_time}</div>
                        <div>{session.End_time}</div>
                        <div className="flex gap-2">
                            <Button variant="outline" onClick={() => handleEditClick(session)}>Edit</Button>
                            <Button variant="destructive" onClick={() => openDeleteDialog(session.id)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>
            
            {editingSession && (
                <EditSessionCard
                    session={editingSession}
                    onSave={handleSaveSession}  
                    onClose={handleCloseModal}
                />
            )}
            
            <DeleteSessionCard
                isOpen={isDialogOpen}
                onClose={closeDeleteDialog}
                onConfirm={deleteSession}
            />
        </div>
    );
};

export default ListOfSessions;
