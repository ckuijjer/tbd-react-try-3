import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import ImageGrid from './ImageGrid';
import FullscreenImage from './FullscreenImage';

class Gallery extends React.Component {
  handleClickImage = image => {
    const { match, history } = this.props;
    history.push(`${match.url}/${image.id}`);
  };

  renderFullScreenImage = ({ match, history }) => {
    const { images } = this.props;

    const image = images.filter(image => image.id === match.params.id)[0];
    return image
      ? <FullscreenImage image={image} onClick={history.goBack} />
      : null;
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <ImageGrid
          images={this.props.images}
          onClickImage={this.handleClickImage}
        />
        <Route path={`${match.url}/:id`} render={this.renderFullScreenImage} />
      </div>
    );
  }
}

export default withRouter(Gallery);
