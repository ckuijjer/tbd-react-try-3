import React from 'react';
import ImageGrid from './ImageGrid';
import FullscreenImage from './FullscreenImage';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreenImage: null,
    };
  }

  handleClickImage = image => {
    this.setState({
      fullscreenImage: image,
    });
  };

  handleClickFullscreenImage = () => {
    this.setState({
      fullscreenImage: null,
    });
  };

  render() {
    return (
      <div>
        <ImageGrid
          images={this.props.images}
          onClickImage={this.handleClickImage}
        />
        {this.state.fullscreenImage &&
          <FullscreenImage
            image={this.state.fullscreenImage}
            onClick={this.handleClickFullscreenImage}
          />}
      </div>
    );
  }
}

export default Gallery;
