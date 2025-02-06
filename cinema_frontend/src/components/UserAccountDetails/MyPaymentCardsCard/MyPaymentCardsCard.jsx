import React from 'react';

const MyPaymentCardsCard = () => {
  const paymentCards = [
    { id: 1, cardType: 'Visa', last4Digits: '1234', expirationDate: '12/25' },
    { id: 2, cardType: 'MasterCard', last4Digits: '5678', expirationDate: '10/23' },
    { id: 3, cardType: 'American Express', last4Digits: '9012', expirationDate: '08/24' },
  ];

  return (
    <div className="space-y-6">
      {paymentCards.length > 0 ? (
        <ul className="space-y-4">
          {paymentCards.map((card) => (
            <li key={card.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-lg">
              <div>
                <h4 className="font-semibold">{card.cardType}</h4>
                <p className="text-gray-500">**** **** **** {card.last4Digits}</p>
                <p className="text-gray-400">Expiration Date: {card.expirationDate}</p>
              </div>
              <button className="text-blue-500 hover:underline">Edit</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No payment cards saved yet.</p>
      )}
    </div>
  );
};

export default MyPaymentCardsCard;
