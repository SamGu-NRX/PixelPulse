import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/canvas');
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-800">
            <h1 className="text-4xl font-bold text-white">
                When people come together to create
            </h1>
            <button
                onClick={handleClick}
                className="mt-4 bg-black text-white py-2 px-4 border-2 border-orange-500 rounded hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
                style={{ fontSize: '24px' }}
            >
                Start creating
            </button>
        </div>
    );
}

export default HomePage;
