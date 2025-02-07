import React from 'react';
import SeatsList from './SeatsList/SeatsList';
import Screen from './Screen/Screen';

const HallShape = () => {
  return (
    <div className='flex flex-col w-3/4 gap-10 bg-gray-100 p-2 rounded-lg'>
        <Screen />
        <SeatsList />
    </div>
  )
}

export default HallShape;