import React from 'react';
import './Button.css';

const Button = ({ label, onClick, className = '', colSpan = 1, rowSpan = 1 }) => {
  const style = {
    gridColumn: colSpan > 1 ? `span ${colSpan}` : 'auto',
    gridRow: rowSpan > 1 ? `span ${rowSpan}` : 'auto',
  };

  return (
    <button
      className={`calculator-button ${className}`}
      onClick={onClick}
      style={style}
    >
      {label}
    </button>
  );
};

export default Button;
