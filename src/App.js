import React, { useState } from 'react';
import './App.css'; 

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const handleSurnameButtonClick = () => {
    setInput('Santiago');
  };

  return (
      <div className="calculator">
      <div className="H1"><h1>Santiago, Reanne Allen G. - IT3A</h1>
        <div className="display">
          <input type="text" value={input} readOnly />
          <span className="result">{result}</span>
        </div>
        <div className="buttons">
          <div className="row1">
            <button onClick={() => handleButtonClick('7')} className="button">7</button>
            <button onClick={() => handleButtonClick('4')} className="button">4</button>
            <button onClick={() => handleButtonClick('1')} className="button">1</button>
            <button onClick={() => handleButtonClick('C')} className="button clear">C</button>
          </div>
          <div className="row2">
          <button onClick={() => handleButtonClick('8')} className="button">8</button>
          <button onClick={() => handleButtonClick('5')} className="button">5</button>
          <button onClick={() => handleButtonClick('2')} className="button">2</button>
          <button onClick={() => handleButtonClick('0')} className="button">0</button>
        </div>
        <div className="row3">
          <button onClick={() => handleButtonClick('9')} className="button">9</button>
          <button onClick={() => handleButtonClick('6')} className="button">6</button>
          <button onClick={() => handleButtonClick('3')} className="button">3</button>
          <button onClick={() => handleButtonClick('=')} className="button equal">=</button>
        </div>
          <div className="row4">
            <button onClick={() => handleButtonClick('+')} className="button operator">+</button>
            <button onClick={() => handleButtonClick('-')} className="button operator">-</button>
            <button onClick={() => handleButtonClick('*')} className="button operator">*</button>
            <button onClick={() => handleButtonClick('÷')} className="button operator">÷</button>
          </div>
        </div>
      </div>
      <div className="surname">
        <button onClick={handleSurnameButtonClick}>Santaigo</button>
      </div>
    </div>
  );
};

export default Calculator;
