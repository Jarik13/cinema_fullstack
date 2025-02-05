import React from 'react';
import Location from '../Location/Location';

const Navbar = () => {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex justify-between items-center gap-8'>
            <h1 className='cursor-pointer'>Jeen Studio</h1>
            <Location />
        </div>
        <div>
            
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar;