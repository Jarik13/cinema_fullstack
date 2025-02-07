import BuyTicketList from '@/components/BuyTicketList/BuyTicketList';
import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import HallShape from '@/components/HallShape/HallShape';
import React from 'react';

const HallPage = () => {
  return (
    <div className='flex flex-col w-full p-4'>
      <GoToHomePage message={"Issuing tickets"} />

      <div className='flex flex-col justify-start p-2 mt-4 mb-4 border-b-2'>
        <div className='text-2xl mb-2'>
          <h1>Choose seats in Hall</h1>
        </div>
        <div className='flex gap-4 items-center'>
          <span>Film Name</span>
          <span>•</span>
          <span>7 february</span>
          <span>•</span>
          <div className='flex gap-2'>
            <span>start_time</span>
            <span>-</span>
            <span>end_time</span>
          </div>
          <span>•</span>
          <span>Hall Name</span>
        </div>
      </div>

      <div className='flex gap-4'>
        <HallShape />
        <BuyTicketList />
      </div>
    </div>
  )
}

export default HallPage;