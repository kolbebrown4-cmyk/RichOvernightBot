import React, { useState } from 'react';
import { init, TON_CONNECT_UI } from '@tonconnect/ui-react';

init('https://app.tonkeeper.com/ton-connect');

function App() {
  const [balance, setBalance] = useState(0);
  const [taps, setTaps] = useState(0);

  const handleTap = () => {
    setTaps(taps + 1);
    setBalance(balance + 1); // Earn 1 $AGENT per tap
  };

  const connectWallet = () => {
    TON_CONNECT_UI.openModal();
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Tap to Train Your AI Agent! 🚀</h1>
      <p>Balance: {balance} $AGENT</p>
      <p>Taps: {taps}</p>
      <button onClick={handleTap} style={{ fontSize: '24px', padding: '10px' }}>
        TAP TO EARN
      </button>
      <br /><br />
      <button onClick={connectWallet}>Connect TON Wallet</button>
      <p>Refer a friend: +500 $AGENT</p>
    </div>
  );
}

export default App;
