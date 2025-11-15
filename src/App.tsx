import React, { useState } from 'react';

function App() {
  const [taps, setTaps] = useState(0);
  const [balance, setBalance] = useState(0);

  const handleTap = () => {
    setTaps(taps + 1);
    setBalance(balance + 10); // 10 $AGENT per tap
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px', fontFamily: 'Arial' }}>
      <h1>🚀 AI Agent Tap-to-Earn</h1>
      <p>Balance: <strong>{balance} $AGENT</strong></p>
      <p>Taps: {taps}</p>
      <button 
        onClick={handleTap}
        style={{
          fontSize: '32px',
          padding: '20px 40px',
          margin: '20px',
          borderRadius: '20px',
          background: '#00D4FF',
          border: 'none',
          color: 'white'
        }}
      >
        TAP TO EARN
      </button>
      <p>Refer friends: +500 $AGENT each!</p>
      <p>Airdrop in 30 days on TON</p>
    </div>
  );
}

export default App;
