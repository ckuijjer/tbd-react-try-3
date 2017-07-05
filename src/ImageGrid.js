import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Image from './Image';

const ImageGrid = ({ images, match }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 16
  };

  return (
    <div style={style}>
      {images.map(image =>
        <Link to={`${match.url}/${image.id}`} key={image.id}>
          <Image src={image.thumbnail} />
        </Link>
      )}
    </div>
  );
};

export default withRouter(ImageGrid);
