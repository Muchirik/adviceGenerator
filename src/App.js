import React, { useState, useEffect } from 'react';
import AdviceCard from './components/adviceCard';
import './App.css';

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceNumber, setAdviceNumber] = useState(0);

  const fetchAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
    setAdviceNumber(data.slip.id);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="App">
      <AdviceCard advice={advice} adviceNumber={adviceNumber} fetchAdvice={fetchAdvice} />
    </div>
  );
}

export default App;
