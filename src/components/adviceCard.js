import React from 'react';
import './adviceCard.css';
import diceIcon from '../images/icon-dice.svg'; 
import group2 from '../images/Group 2.svg';
import "@fontsource/manrope";

const AdviceCard = ({ advice, adviceNumber, fetchAdvice }) => {
  return (
    <div className="advice-card">
      <div className="advice-number">ADVICE #{adviceNumber}</div>
      <div className="advice-text">“{advice}”</div>
      <div className="controls">
        <div className="group2-container">
        <img src={group2} alt="dice icon" />
        </div>
        
      <div className="dice-container" onClick={fetchAdvice}>
          <img src={diceIcon} alt="dice icon" />
      </div>
          
        
      </div>
    </div>
  );
};

export default AdviceCard;
