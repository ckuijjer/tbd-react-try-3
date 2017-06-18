import React from 'react';

const Button = ({ children, onClick = () => {}, style }) => (
  <button onClick={onClick} style={{ ...defaultStyle, ...style }}>{ children }</button>
);

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

export default Button;