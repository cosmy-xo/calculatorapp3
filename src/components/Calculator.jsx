import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit) => {
    if (waitingForOperand) {
      setDisplay(String(digit));
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? String(digit) : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay('0');
    }
  };

  const performOperation = (nextOperation) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return secondValue !== 0 ? firstValue / secondValue : 0;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (operation && previousValue !== null) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  return (
    <div className="calculator">
      <Display value={display} />
      <div className="calculator-buttons">
        <Button label="C" onClick={clear} className="btn-function" />
        <Button label="DEL" onClick={deleteLast} className="btn-function" />
        <Button label="÷" onClick={() => performOperation('÷')} className="btn-operator" />
        <Button label="×" onClick={() => performOperation('×')} className="btn-operator" />
        
        <Button label="7" onClick={() => inputDigit(7)} />
        <Button label="8" onClick={() => inputDigit(8)} />
        <Button label="9" onClick={() => inputDigit(9)} />
        <Button label="-" onClick={() => performOperation('-')} className="btn-operator" />
        
        <Button label="4" onClick={() => inputDigit(4)} />
        <Button label="5" onClick={() => inputDigit(5)} />
        <Button label="6" onClick={() => inputDigit(6)} />
        <Button label="+" onClick={() => performOperation('+')} className="btn-operator" />
        
        <Button label="1" onClick={() => inputDigit(1)} />
        <Button label="2" onClick={() => inputDigit(2)} />
        <Button label="3" onClick={() => inputDigit(3)} />
        <Button label="=" onClick={handleEquals} className="btn-equals" rowSpan={2} />
        
        <Button label="0" onClick={() => inputDigit(0)} colSpan={2} />
        <Button label="." onClick={inputDecimal} />
      </div>
    </div>
  );
};

export default Calculator;
