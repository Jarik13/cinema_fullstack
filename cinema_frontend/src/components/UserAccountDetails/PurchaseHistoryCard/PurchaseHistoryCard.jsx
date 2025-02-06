import React from 'react';

const PurchaseHistoryCard = () => {
  // Sample purchase data for cinema tickets with detailed information
  const purchases = [
    { 
      id: 2, 
      title: 'Movie A', 
      showtime: '2025-02-05 19:30', 
      date: '2025-02-05', 
      amount: '$15'
    },
    { 
      id: 3, 
      title: 'Movie B', 
      showtime: '2025-02-06 21:00', 
      date: '2025-02-06', 
      amount: '$15'
    }
  ];

  return (
    <div>
      {purchases.length > 0 ? (
        <ul className="space-y-4">
          {purchases.map((purchase) => (
            <li key={purchase.id}>
              <div className="bg-gray-100 p-4 rounded-lg shadow-lg flex flex-col space-y-4">
                <h3 className="text-xl font-semibold">{purchase.title}</h3>
                <p className="text-gray-500">Showtime: {purchase.showtime}</p>
                <p className="text-gray-500">Date: {purchase.date}</p>
                <p className="text-gray-500">Amount: {purchase.amount}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No purchases yet.</p>
      )}
    </div>
  );
};

export default PurchaseHistoryCard;
