import React from 'react';

const Image = ({ src, onClick = () => {} }) => {
  const style = {
    background: `url('${src}') center / cover`,
    paddingTop: '100%'
  };

  return (
    <div src={src} style={style} onClick={onClick} />
  );
}

export default Image;