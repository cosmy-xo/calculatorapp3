import React from 'react';
import './Display.css';

const Display = ({ value }) => {
  return (
    <div className="calculator-display">
      <div className="display-value">{value}</div>
    </div>
  );
};

export default Display;
