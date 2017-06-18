import React, { Component } from 'react';
import _ from 'lodash';
import Gallery from './Gallery';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    };
  }

  componentDidMount() {
    const subreddit = this.props.match.params.subreddit;
    
    this.getImages(subreddit);
  }

  componentWillReceiveProps(nextProps) {
    const subreddit = this.props.match.params.subreddit;
    const nextSubreddit = nextProps.match.params.subreddit;

    if (subreddit !== nextSubreddit) {
      this.getImages(nextSubreddit);
    }
  }

  getImages(subreddit) {
    return fetch(`https://www.reddit.com/r/${subreddit}/hot.json?raw_json=1&limit=24`)
      .then(response => response.json())
      .then(response => {
        return response.data.children
          .map(child => {
            return {
              id: _.get(child, 'data.id'),
              original: _.get(child, 'data.preview.images[0].source.url'),
              thumbnail: _.get(child, 'data.preview.images[0].resolutions', [])
                .filter(resolution => resolution.width === 320)
                .map(resolution => resolution.url)[0]
            }
          })
          .filter(data => data.thumbnail !== undefined && data.id !== undefined && data.original !== undefined);
      })
      .then(images => {
        this.setState({ images })
      })
  }

  render() {
    return (
      <Gallery images={this.state.images} />
    );
  }
}

export default GalleryContainer;
