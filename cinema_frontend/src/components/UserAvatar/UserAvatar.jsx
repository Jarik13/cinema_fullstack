import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';

const UserAvatar = () => {
    const [open, setOpen] = useState(false);

    const handleMenuToggle = () => setOpen((prev) => !prev);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                <Avatar>
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </PopoverTrigger>
            <PopoverContent>
                <Button variant="ghost" className="w-full text-left" onClick={handleMenuToggle}>My Profile</Button>
                <Button variant="destructive" className="w-full text-left" onClick={handleMenuToggle}>Logout</Button>
            </PopoverContent>
        </Popover>
    )
}

export default UserAvatar