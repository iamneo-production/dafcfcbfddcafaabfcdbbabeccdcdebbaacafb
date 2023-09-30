import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setDisplay(display + number);
  };

  const handleOperatorClick = (operator) => {
    if (display !== '' && !'+-*/'.includes(display[display.length - 1])) {
      setDisplay(display + operator);
    }
  };

  const handleCalculate = () => {
    try {
      setResult(eval(display).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setDisplay('');
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="display">{result !== '' ? result : display}</div>
      <div className="buttons">
        <div className="row">
          <button onClick={() => handleNumberClick('1')}>1</button>
          <button onClick={() => handleNumberClick('2')}>2</button>
          <button onClick={() => handleNumberClick('3')}>3</button>
          <button onClick={() => handleOperatorClick('+')}>+</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('4')}>4</button>
          <button onClick={() => handleNumberClick('5')}>5</button>
          <button onClick={() => handleNumberClick('6')}>6</button>
          <button onClick={() => handleOperatorClick('-')}>-</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('7')}>7</button>
          <button onClick={() => handleNumberClick('8')}>8</button>
          <button onClick={() => handleNumberClick('9')}>9</button>
          <button onClick={() => handleOperatorClick('*')}>*</button>
        </div>
        <div className="row">
          <button onClick={() => handleNumberClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleOperatorClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
