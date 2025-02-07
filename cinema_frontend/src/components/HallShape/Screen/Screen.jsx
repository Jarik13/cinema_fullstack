import React from 'react';

const Screen = () => {
    return (
        <div className="relative text-center text-xl w-full">
            <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-gray-400 via-transparent to-transparent rounded-t-xl shadow-[0px_-15px_50px_rgba(255,255,255,0.2)]"></div>

            <div className="relative w-3/4 mx-auto">
                <div
                    className="h-6 w-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 shadow-lg p-4"
                    style={{
                        borderRadius: '0 0 100px 100px',
                    }}
                >
                    <h2 className="text-white absolute inset-0 flex items-center justify-center">Screen</h2>
                </div>
            </div>
        </div>
    );
};

export default Screen;
