import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useParams } from 'react-router-dom';

const SnacksListPage = () => {
    const params = useParams();

    const [snacks, setSnacks] = useState([
        { id: 1, name: 'Popcorn', price: 50, quantity: 0 },
        { id: 2, name: 'Nachos', price: 70, quantity: 0 },
        { id: 3, name: 'Soda', price: 40, quantity: 0 },
        { id: 4, name: 'Candy', price: 30, quantity: 0 },
        { id: 5, name: 'Chips', price: 60, quantity: 0 },
        { id: 6, name: 'Ice Cream', price: 90, quantity: 0 },
        { id: 7, name: 'Chocolate Bar', price: 55, quantity: 0 },
        { id: 8, name: 'Hot Dog', price: 100, quantity: 0 },
        { id: 9, name: 'Muffin', price: 25, quantity: 0 },
        { id: 10, name: 'Cupcake', price: 35, quantity: 0 },
        { id: 11, name: 'Burger', price: 110, quantity: 0 },
        { id: 12, name: 'Fries', price: 40, quantity: 0 },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastSnack = currentPage * itemsPerPage;
    const indexOfFirstSnack = indexOfLastSnack - itemsPerPage;
    const currentSnacks = snacks.slice(indexOfFirstSnack, indexOfLastSnack);

    const incrementQuantity = (id) => {
        setSnacks(snacks.map(snack =>
            snack.id === id ? { ...snack, quantity: snack.quantity + 1 } : snack
        ));
    };

    const decrementQuantity = (id) => {
        setSnacks(snacks.map(snack =>
            snack.id === id && snack.quantity > 0
                ? { ...snack, quantity: snack.quantity - 1 }
                : snack
        ));
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(snacks.length / itemsPerPage);

    const selectedSnacks = snacks.filter(snack => snack.quantity > 0);
    const totalPrice = selectedSnacks.reduce((total, snack) => total + snack.price * snack.quantity, 0);

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
                                <h3 className='text-xl font-semibold'>{snack.name}</h3>
                                <p className='text-lg text-gray-600'>$ {snack.price}</p>
                            </div>

                            <div className='flex items-center gap-4'>
                                <Button
                                    variant="ghost"
                                    onClick={() => decrementQuantity(snack.id)}
                                    disabled={snack.quantity === 0}
                                >
                                    -
                                </Button>
                                <span className='text-lg'>{snack.quantity}</span>
                                <Button
                                    variant="ghost"
                                    onClick={() => incrementQuantity(snack.id)}
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
                        <div key={snack.id} className='flex justify-between items-center mb-2'>
                            <span>{snack.name} x{snack.quantity}</span>
                            <span>${snack.price * snack.quantity}</span>
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
