import React from 'react';

const ActionCard = ({ discount, title, image }) => {
    return (
        <div className="bg-white text-black rounded-2xl shadow-2xl p-4 w-72">
            <div className="text-2xl font-bold text-red-500">-{discount} грн</div>
            <div className="mt-2 text-lg font-semibold">{title}</div>
            <div className="mt-4 flex justify-center">
                <img src={image} alt="Promo" className="rounded-lg w-full h-40 object-cover" />
            </div>
        </div>
    );
};

export default ActionCard;