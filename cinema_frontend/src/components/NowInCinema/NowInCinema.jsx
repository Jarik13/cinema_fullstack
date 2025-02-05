import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react'
import React, { useState } from 'react'

const NowInCinema = () => {
    const [currentFilmNumber, setCurrentFilmNumber] = useState(1);
    const maxFilmNumber = 28;

    const decrement = () => {
        setCurrentFilmNumber(prevNumber => prevNumber != 1 ? prevNumber - 1 : 1)
    }

    const increment = () => {
        setCurrentFilmNumber(prevNumber => prevNumber != maxFilmNumber ? prevNumber + 1 : maxFilmNumber)
    }

    return (
        <div className='w-[300px]'>
            <h2 className='text-2xl mb-3'>Now in the Cinema</h2>

            <div className='ml-2 w-[50px] text-center text-xl'>
                <div className='flex flex-col items-center'>
                    <div 
                        className='mb-2 p-1 rounded-full hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out'
                        onClick={decrement}
                    >
                        <ChevronUpIcon className="w-5 h-5 text-black" />
                    </div>
                    <div className='mb-1'>
                        <span>{currentFilmNumber}</span>
                    </div>
                    <div className='mb-1'>
                        <div className='border-l-2 border-gray-400 h-[40px]'></div>
                    </div>
                    <div>
                        <span className='text-gray-400'>28</span>
                    </div>
                    <div 
                        className='mt-2 p-1 rounded-full hover:bg-gray-200 cursor-pointer transition duration-300 ease-in-out'
                        onClick={increment}
                    >
                        <ChevronDownIcon className="w-5 h-5 text-black" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NowInCinema