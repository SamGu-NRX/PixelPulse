import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
        onClick={onClick}
        className="mt-4 bg-black text-white py-2 px-4 border-2 border-orange-500 rounded hover:bg-orange-500 transition-colors duration-300 cursor-pointer"
        style={{ fontSize: '24px', animation: 'buttonFadeIn 1s ease-in-out' }}
    >
        {children}
    </button>
  );
};

export default Button;
