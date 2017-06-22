import React from 'react';
import { Route, withRouter } from 'react-router';
import ImageGrid from './ImageGrid';
import FullscreenImage from './FullscreenImage';

const Gallery = ({ images, match, history }) => {
  const renderFullscreenImage = ({ match }) => {
    const image = images.filter(image => image.id === match.params.id)[0];

    return image ? <FullscreenImage src={image.original} onClick={history.goBack} /> : null;
  };

  return (
    <div>
      <ImageGrid images={images} />
      <Route path={`${match.url}/:id`} render={renderFullscreenImage} />
    </div>
  );
}

export default withRouter(Gallery);