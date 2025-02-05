import React from 'react';
import Location from '../Location/Location';
import { Button } from '../ui/button';

const Navbar = () => {
  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex justify-between items-center gap-8'>
            <h1 className='cursor-pointer'>Jeen Studio</h1>
            <Location />
        </div>
        <div className='flex justify-between items-center gap-8'>
            <Button variant="ghost" size="lg" className="text-xl underline decoration-2">In the cinema</Button>
            <Button variant="destructive" size="lg">Watch online</Button>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Navbar;