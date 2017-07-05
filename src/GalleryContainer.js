import React, { Component } from 'react';
import _ from 'lodash';
import Gallery from './Gallery';

const SUBREDDIT = 'earthporn';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    this.getImages();
  }

  getImages() {
    return fetch(
      `https://www.reddit.com/r/${SUBREDDIT}/hot.json?raw_json=1&limit=24`,
    )
      .then(response => response.json())
      .then(response => {
        return response.data.children
          .map(child => {
            const resolutions = _.get(
              child,
              'data.preview.images[0].resolutions',
              [],
            );
            return resolutions
              .filter(resolution => resolution.width === 320)
              .map(resolution => resolution.url)[0];
          })
          .filter(thumbnail => thumbnail !== undefined);
      })
      .then(images => {
        this.setState({ images });
      });
  }

  render() {
    return <Gallery images={this.state.images} />;
  }
}

export default GalleryContainer;
