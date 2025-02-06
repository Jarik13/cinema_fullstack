import { CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import React from 'react';
import UpdateUserInfoCard from '../UpdateUserInfo/UpdateUserInfoCard';

const PersonalInfoCard = () => {
    return (
        <>
            <div>
                <CardDescription className="text-gray-400">Name:</CardDescription>
                <span>Something name</span>
            </div>
            <div>
                <CardDescription className="text-gray-400">Email:</CardDescription>
                <span>example@something.com</span>
            </div>
            <div>
                <CardDescription className="text-gray-400">Password:</CardDescription>
                <Input type="password" value="********" disabled className="bg-gray-700 text-white" />
            </div>
            <div>
                <UpdateUserInfoCard />
            </div>
        </>
    )
}

export default PersonalInfoCard;