import React from 'react';
import Location from '../Location/Location';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import Filters from '../Filters/Filters';
import UserAvatar from '../UserAvatar/UserAvatar';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='border-b py-4 px-5 flex items-center justify-between'>
        <div className='flex justify-between items-center gap-8'>
            <h1 className='cursor-pointer' onClick={() => navigate("/")}>Jeen Studio</h1>
            <Location />
        </div>
        <div className='flex justify-between items-center gap-8'>
            <Button variant="ghost" size="lg" className="text-xl underline decoration-2" onClick={() => navigate("/")}>In the cinema</Button>
            <Button variant="destructive" size="lg">Watch online</Button>
        </div>
        <div className='flex justify-between items-center gap-8'>
            <Input type="text" placeholder="Film here..." />
            <Filters />
            <UserAvatar />
        </div>
    </div>
  )
}

export default Navbar;