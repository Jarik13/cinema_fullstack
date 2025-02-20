import { Button } from '@/components/ui/button';
import { getReviewList } from '@/redux/Review/Action';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ListOfReviews = () => {
    const dispatch = useDispatch();
    const reviews = useSelector(store => store.review?.reviews || []);
    const isFirstLoaded = useRef(true);

    useEffect(() => {
        dispatch(getReviewList(isFirstLoaded.current));
        isFirstLoaded.current = false;
    }, [dispatch])

    return (
        <div className='flex flex-col'>
            <p className="text-2xl font-bold mb-4">All Users List</p>
            <div className="border rounded-lg overflow-hidden">
                <div className='grid grid-cols-[3fr_1fr_1fr_2fr_0.5fr_1fr] bg-gray-100 font-bold px-4 py-2'>
                    <div>ID</div>
                    <div>User</div>
                    <div>Film</div>
                    <div>Content</div>
                    <div>Mark</div>
                    <div>Action</div>
                </div>
                {reviews.map(review => (
                    <div key={review?.Id} className="grid grid-cols-[3fr_1fr_1fr_2fr_0.5fr_1fr] border-t px-4 py-2 items-center">
                        <div>{review?.Id}</div>
                        <div>{review?.User?.UserName}</div>
                        <div>{review?.Film?.Name}</div>
                        <div>{review?.Content}</div>
                        <div>{review?.Mark}</div>
                        <Button variant="destructive" size="sm">Delete</Button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListOfReviews;