import React from 'react';

function CanvasPage() {
    console.log("rendering canvas Page")

    return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Canvas Page</h1>
      <canvas id="myCanvas" width="800" height="600" style={{ border: '1px solid #000' }}></canvas>
    </div>
  );
}

export default CanvasPage;
