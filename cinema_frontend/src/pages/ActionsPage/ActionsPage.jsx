import ActionCard from '@/components/ActionCard/ActionCard';
import GoToHomePage from '@/components/GoToHomePage/GoToHomePage';
import React from 'react';

const actions = [
    { discount: 50, title: "Знижка для людей з інвалідністю", image: "../public/discount1.jpg" },
    { discount: 30, title: "Акція на попкорн", image: "../public/discount2.jpg" },
    { discount: 20, title: "Знижка на студентський квиток", image: "../public/discount3.jpg" },
    { discount: 50, title: "Знижка для людей з інвалідністю", image: "" },
    { discount: 30, title: "Акція на попкорн", image: "" },
    { discount: 20, title: "Знижка на студентський квиток", image: "" },
];

const ActionsPage = () => {
    return (
        <div className='flex flex-col w-full p-4'>
            <GoToHomePage message={"Hot prices!"} navigation={"/"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {actions.map((action, index) => (
                    <ActionCard key={index} {...action} />
                ))}
            </div>
        </div>
    );
}

export default ActionsPage;