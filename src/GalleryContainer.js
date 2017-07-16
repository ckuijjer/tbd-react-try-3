import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as actions from './redux/reddit';

import Gallery from './Gallery';

class GalleryContainer extends Component {
  componentDidMount() {
    const subreddit = this.props.match.params.subreddit;
    this.props.requestReddit(subreddit);
  }

  componentDidUpdate({ match }) {
    const subreddit = this.props.match.params.subreddit;
    const prevSubreddit = match.params.subreddit;

    if (subreddit !== prevSubreddit) {
      this.props.requestReddit(subreddit);
    }
  }

  render() {
    return <Gallery images={this.props.images} />;
  }
}

const mapStateToProps = ({ reddit }) => ({
  images: reddit.images,
});

const mapDispatchToProps = {
  requestReddit: actions.requestReddit,
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryContainer);
