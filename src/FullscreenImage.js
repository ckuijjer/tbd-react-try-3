import React from 'react';
import Image from './Image';

const FullscreenImage = ({ image, onClick = () => {} }) => {
  const styles = {
    container: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 1,
      maxWidth: 768,
      padding: 16,
      boxSizing: 'border-box',
    },
  };

  return (
    <div style={styles.container} onClick={onClick}>
      <div style={styles.content}>
        <Image src={image.original} />
      </div>
    </div>
  );
};

export default FullscreenImage;
