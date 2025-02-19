import { Button } from '@/components/ui/button';
import React, { useEffect, useRef, useState } from 'react';
import EditActionCard from './EditActionCard/EditActionCard';
import DeleteActionCard from './DeleteActionCard/DeleteActionCard';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleList } from '@/redux/Sale/Action';

const ListOfActions = () => {
    const dispatch = useDispatch();
    const actions = useSelector(store => store.sale?.sales || []);
    const isFirtLoaded = useRef(true);

    useEffect(() => {
        dispatch(getSaleList(isFirtLoaded.current));
        isFirtLoaded.current = false;
    }, [])

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
                <div className='grid grid-cols-7 bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>Discount</div>
                    <div>Description</div>
                    <div>Reason</div>
                    <div>Discount Type</div>
                    <div>Active</div>
                    <div>Action</div>
                </div>
                {actions.map((action) => (
                    <div key={action?.Id} className="grid grid-cols-7 px-4 py-2 border-b items-center">
                        <div>{action?.Id}</div>
                        <div>{action?.Discount}%</div>
                        <div>{action?.Description}</div>
                        <div>{action?.For_what}</div>
                        <div>{action?.Discount_type}</div>
                        <div className={action?.Is_Active ? "text-green-600" : "text-red-600"}>
                            {action?.Is_Active ? "Active" : "Non Active"}
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