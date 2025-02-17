import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSnackList } from '@/redux/Snack/Action';

const SnacksListPage = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const snacks = useSelector(store => store.snack?.snacks);

    const isFirstLoad = useRef(true);

    useEffect(() => {
        dispatch(getSnackList(isFirstLoad.current));
        isFirstLoad.current = false;
    }, [dispatch]);

    // Додаємо локальний стан для кількості снеків
    const [snackQuantities, setSnackQuantities] = useState({});

    useEffect(() => {
        // Ініціалізуємо кількість снеків (за замовчуванням 0)
        const initialQuantities = snacks.reduce((acc, snack) => {
            acc[snack.Id] = 0;
            return acc;
        }, {});
        setSnackQuantities(initialQuantities);
    }, [snacks]);

    const incrementQuantity = (id) => {
        setSnackQuantities(prev => ({
            ...prev,
            [id]: (prev[id] || 0) + 1
        }));
    };

    const decrementQuantity = (id) => {
        setSnackQuantities(prev => ({
            ...prev,
            [id]: Math.max((prev[id] || 0) - 1, 0)
        }));
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastSnack = currentPage * itemsPerPage;
    const indexOfFirstSnack = indexOfLastSnack - itemsPerPage;
    const currentSnacks = snacks.slice(indexOfFirstSnack, indexOfLastSnack);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(snacks.length / itemsPerPage);

    const selectedSnacks = snacks.filter(snack => snackQuantities[snack.Id] > 0);
    const totalPrice = selectedSnacks.reduce((total, snack) => total + snack.Price * snackQuantities[snack.Id], 0);

    return (
        <div className='flex flex-col lg:flex-row w-full p-4 gap-6'>
            <div className='flex-1'>
                <GoToHomePage message={"Choose your favourite snacks"} navigation={`/${params.locationId}/sessions/${params.sessionId}`} />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'>
                    {currentSnacks.map(snack => (
                        <div
                            key={snack.id}
                            className='border rounded-lg py-4 px-2 shadow-lg flex flex-col items-center bg-white'
                        >
                            <div className='w-full h-32 bg-gray-300 rounded-lg mb-4'></div>

                            <div className='flex gap-4 items-center mb-2'>
                                <h3 className='text-xl font-semibold'>{snack.Name}</h3>
                                <p className='text-lg text-gray-600'>$ {snack.Price}</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <Button
                                    variant="ghost"
                                    onClick={() => decrementQuantity(snack.Id)}
                                    disabled={snackQuantities[snack.Id] === 0}
                                >
                                    -
                                </Button>
                                <span className='text-lg'>{snackQuantities[snack.Id] || 0}</span>
                                <Button
                                    variant="ghost"
                                    onClick={() => incrementQuantity(snack.Id)}
                                >
                                    +
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='flex justify-center mt-4'>
                    <div className='flex gap-2'>
                        <Button
                            variant="outline"
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                        >
                            Prev
                        </Button>
                        <span className='flex items-center'>
                            Page {currentPage} of {totalPages}
                        </span>
                        <Button
                            variant="outline"
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-1/3 bg-gray-50 shadow-lg rounded-lg p-6'>
                <h2 className='text-xl font-semibold mb-4'>Selected Snacks</h2>
                <div>
                    {selectedSnacks.map(snack => (
                        <div key={snack.Id} className='flex justify-between items-center mb-2'>
                            <span>{snack.Name} x{snackQuantities[snack.Id]}</span>
                            <span>${snack.Price * snackQuantities[snack.Id]}</span>
                        </div>
                    ))}
                </div>
                <div className='flex justify-between items-center mt-6'>
                    <h3 className='text-lg font-semibold'>Total Price: ${totalPrice}</h3>
                    <Button variant="destructive" onClick={() => alert('Proceeding to payment...')}>
                        Proceed to Payment
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SnacksListPage;
