import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

const UserAvatar = () => {
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);
    const isAuthenticated = false;

    const handleMenuToggle = () => setOpen((prev) => !prev);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger>
                {
                    isAuthenticated
                        ? <Avatar>
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        : "None"
                }
            </PopoverTrigger>
            <PopoverContent>
                {
                    isAuthenticated
                        ?
                        <>
                            <Button
                                variant="ghost"
                                className="w-full text-left"
                                onClick={() => { handleMenuToggle(); navigate("/my-profile") }}
                            >
                                My Profile
                            </Button>
                            <Button variant="destructive" className="w-full text-left" onClick={handleMenuToggle}>Logout</Button>
                        </>
                        :
                        <Button
                            variant="destructive"
                            className="w-full text-left"
                            onClick={() => { handleMenuToggle(); navigate("/auth") }}
                        >
                            Register
                        </Button>
                }
            </PopoverContent>
        </Popover>
    )
}

export default UserAvatar