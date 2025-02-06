import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UserAccountDetails = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 text-black max-w-4xl mx-auto transform translate-y-[-100px]">
            <div className="flex flex-col items-center md:items-start w-[20rem]">
                <div className="w-24 h-24 rounded-full shadow-lg flex items-center justify-center mb-4">
                    <span>Username</span>
                </div>
                <nav className="flex flex-col gap-2 text-black w-60">
                    <a href="#" className="underline">Personal Information</a>
                    <a href="#">Purchase History</a>
                    <a href="#">My Payment Cards</a>
                    <a href="#">My Tickets</a>
                </nav>
            </div>

            <Card className="w-full">
                <CardHeader>
                    <CardTitle className="text-xl">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 w-[20rem]">
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
                        <Button variant="destructive">Edit</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default UserAccountDetails;
