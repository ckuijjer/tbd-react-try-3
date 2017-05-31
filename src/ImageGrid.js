import React from 'react';
import Image from './Image';

const ImageGrid = ({ images, onClickImage = () => {} }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 16,
  };

  return (
    <div style={style}>
      {
        images.map(image => {
          return <Image src={image} onClick={onClickImage} />
        })
      }
    </div>
  )
}

export default ImageGrid;