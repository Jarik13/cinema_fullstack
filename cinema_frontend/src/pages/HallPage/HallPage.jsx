import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';

const HallPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex">
      <div className="absolute top-4 left-4">
        <GoToHomePage message={"Choose tickets"} />
      </div>
    </div>
  )
}

export default HallPage;