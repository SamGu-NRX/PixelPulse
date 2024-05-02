// components/LoadingScreen.js
import React from 'react';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="text-white text-lg font-semibold">Loading...</div>
        </div>
    );
};

export default LoadingScreen;
