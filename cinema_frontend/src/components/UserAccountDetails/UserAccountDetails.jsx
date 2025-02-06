import React, { useState } from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import PersonalInfoCard from './PersonalInfoCard/PersonalInfoCard';
import PurchaseHistoryCard from './PurchaseHistoryCard/PurchaseHistoryCard';
import MyPaymentCardsCard from './MyPaymentCardsCard/MyPaymentCardsCard';
import MyTicketsCard from './MyTicketsCard/MyTicketsCard';

const UserAccountDetails = () => {
    const [cardContent, setCardContent] = useState('personalInfo');

    const handleLinkClick = (content) => {
        setCardContent(content);
    };

    return (
        <div className="flex flex-col md:flex-row gap-6 p-8 text-black max-w-4xl mx-auto transform translate-y-[-50px]">
            <div className="flex flex-col items-center md:items-start w-[320px] h-[400px]"> 
                <div className="w-24 h-24 rounded-full shadow-lg flex items-center justify-center mb-4">
                    <span>Username</span>
                </div>
                <nav className="flex flex-col gap-2 text-black w-40">
                    <a
                        href="#"
                        onClick={() => handleLinkClick('personalInfo')}
                        className={`${cardContent === 'personalInfo' ? 'underline' : ''}`}
                    >
                        Personal Information
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('purchaseHistory')}
                        className={`${cardContent === 'purchaseHistory' ? 'underline' : ''}`}
                    >
                        Purchase History
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('paymentCards')}
                        className={`${cardContent === 'paymentCards' ? 'underline' : ''}`}
                    >
                        My Payment Cards
                    </a>
                    <a
                        href="#"
                        onClick={() => handleLinkClick('myTickets')}
                        className={`${cardContent === 'myTickets' ? 'underline' : ''}`}
                    >
                        My Tickets
                    </a>
                </nav>
            </div>

            <div className="flex w-[500px]"> 
                <Card className="w-full h-full">
                    <CardHeader className="text-center text-xl">
                        {cardContent === 'personalInfo' && 'Personal Information'}
                        {cardContent === 'purchaseHistory' && 'Purchase History'}
                        {cardContent === 'paymentCards' && 'My Payment Cards'}
                        {cardContent === 'myTickets' && 'My Tickets'}
                    </CardHeader>
                    <CardContent className="space-y-3">
                        {cardContent === 'personalInfo' && <PersonalInfoCard />}
                        {cardContent === 'purchaseHistory' && <PurchaseHistoryCard />}
                        {cardContent === 'paymentCards' && <MyPaymentCardsCard />}
                        {cardContent === 'myTickets' && <MyTicketsCard />}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default UserAccountDetails;
