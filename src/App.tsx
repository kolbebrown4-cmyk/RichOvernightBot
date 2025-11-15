import React, { useState } from 'react';

function App() {
  const [taps, setTaps] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleTap = () => {
    setTaps(taps + 1);
    setBalance(balance + 100); // 100 $RICH per tap
  };

  const shareLink = () => {
    const text = `Get rich overnight! 🚀\n\nTap to earn $RICH tokens!\n\nPlay now: t.me/GetRichOvernightBot`;
    window.open(`https://t.me/share/url?url=&text=${encodeURIComponent(text)}`);
  };

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '30px', 
      fontFamily: 'Arial', 
      background: 'linear-gradient(135deg, #1a1a2e, #16213e)', 
      color: 'white', 
      minHeight: '100vh' 
    }}>
      <h1 style={{ fontSize: '28px', marginBottom: '10px' }}>💰 GetRichOvernightBot</h1>
      <p style={{ fontSize: '18px', margin: '5px' }}>Tap to earn $RICH tokens!</p>

      <div style={{ margin: '30px 0' }}>
        <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '10px 0' }}>
          {balance.toLocaleString()} $RICH
        </p>
        <p style={{ color: '#00​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
