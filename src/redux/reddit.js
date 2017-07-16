import _ from 'lodash';

const REQUEST_REDDIT = 'app/counter/REQUEST_REDDIT';
const RECEIVE_REDDIT = 'app/counter/RECEIVE_REDDIT';

export default (state = { images: [] }, action) => {
  switch (action.type) {
    case REQUEST_REDDIT:
      return { ...state, images: [] };
    case RECEIVE_REDDIT:
      return { ...state, images: action.images };
    default:
      return state;
  }
};

export const requestReddit = subreddit => dispatch => {
  dispatch({ type: REQUEST_REDDIT });

  fetch(`https://www.reddit.com/r/${subreddit}/hot.json?raw_json=1&limit=24`)
    .then(response => response.json())
    .then(response => {
      return response.data.children
        .map(child => {
          return {
            id: _.get(child, 'data.id'),
            original: _.get(child, 'data.preview.images[0].source.url'),
            thumbnail: _.get(child, 'data.preview.images[0].resolutions', [])
              .filter(resolution => resolution.width === 320)
              .map(resolution => resolution.url)[0],
          };
        })
        .filter(
          data =>
            data.thumbnail !== undefined &&
            data.id !== undefined &&
            data.original !== undefined
        );
    })
    .then(images => {
      dispatch({ type: RECEIVE_REDDIT, images });
    });
};
