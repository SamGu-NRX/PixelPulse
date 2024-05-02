import React, { useRef, useEffect } from 'react';
import io from 'socket.io-client';

// const socket = io('http://localhost:3000'); // Connect to server

function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Basic drawing on the canvas here
        context.fillStyle = 'red';
        context.fillRect(10, 10, 50, 50);
    }, []);

    return <canvas ref={canvasRef} width={600} height={400} />;
}

export default Canvas;
