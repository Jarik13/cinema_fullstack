import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import EditActionCard from './EditActionCard/EditActionCard';
import DeleteActionCard from './DeleteActionCard/DeleteActionCard';

const ListOfActions = () => {
    const [actions, setActions] = useState([
        { id: 1, discount: 20, description: 'description 1', type: "Snack", is_active: true },
        { id: 2, discount: 15, description: 'description 2', type: "Ticket", is_active: false },
        { id: 3, discount: 10, description: 'description 3', type: "Ticket", is_active: true },
        { id: 4, discount: 30, description: 'description 4', type: "Snack", is_active: false },
    ]);

    const [editingAction, setEditingAction] = useState(null);
    const [deletingAction, setDeletingAction] = useState(null);

    const handleEdit = (action) => {
        setEditingAction(action);
    };

    const handleSave = (updatedAction) => {
        setActions((prevActions) =>
            prevActions.map((action) =>
                action.id === editingAction.id ? { ...action, ...updatedAction } : action
            )
        );
        setEditingAction(null);
    };

    const handleDelete = (actionId) => {
        setActions((prevActions) => prevActions.filter((action) => action.id !== actionId));
        setDeletingAction(null);
    };

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Action List</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-6 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Discount</div>
                    <div>Description</div>
                    <div>Type</div>
                    <div>Active</div>
                    <div>Action</div>
                </div>
                {actions.map((action) => (
                    <div key={action.id} className="grid grid-cols-6 px-4 py-2 border-b items-center">
                        <div>{action.id}</div>
                        <div>{action.discount}%</div>
                        <div>{action.description}</div>
                        <div>{action.type}</div>
                        <div className={action.is_active ? "text-green-600" : "text-red-600"}>
                            {action.is_active ? "Active" : "Non Active"}
                        </div>
                        <div className='flex gap-2'>
                            <Button variant="outline" onClick={() => handleEdit(action)}>Edit</Button>
                            <Button variant="destructive" onClick={() => setDeletingAction(action)}>Delete</Button>
                        </div>
                    </div>
                ))}
            </div>

            {editingAction && (
                <EditActionCard
                    editAction={editingAction}
                    onSave={handleSave}
                    onClose={() => setEditingAction(null)}
                />
            )}

            <DeleteActionCard
                isOpen={deletingAction !== null}
                onClose={() => setDeletingAction(null)}
                onConfirm={() => handleDelete(deletingAction.id)}
            />
        </div>
    );
}

export default ListOfActions;