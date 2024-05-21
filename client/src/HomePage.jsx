import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button'; // Ensure this is correctly imported

function HomePage() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/canvas');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-800 text-center">
            <h1 className="text-4xl font-bold text-white fadeIn"
                style={{ animation: 'textPopIn 1s ease-out forwards' }}>
                When people come together to create
            </h1>
            <Button onClick={handleClick}>Start creating</Button>
        </div>
    );
}

export default HomePage;
