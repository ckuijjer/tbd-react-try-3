import React from 'react';

const Button = ({ children, style, onClick = () => {} }) => (
  <button style={{ ...defaultStyle, ...style }} onClick={onClick}>{ children }</button>
);

// Button styling
const defaultStyle = {
  fontSize: 24,
  lineHeight: '40px',
  border: '3px solid #f99',
  borderRadius: 6,
  backgroundColor: '#fff',
  color: '#f99',
  cursor: 'pointer',
  paddingLeft: 24,
  paddingRight: 24,
};

export default Button