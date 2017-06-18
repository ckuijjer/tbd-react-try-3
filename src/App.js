import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux/counter';
import AppBar from './AppBar';
import GalleryContainer from './GalleryContainer';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducer, 0);
  }

  render() {
    const styles = {
      container: {
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        minHeight: '100vh',
      },
      content: {
        backgroundColor: '#fff',
        flex: 1,
        maxWidth: 768,
        padding: 16,
        boxSizing: 'border-box',
      },
    }

    return (
      <Provider store={this.store}>
        <Router>
          <div>
            <AppBar />
            <div style={styles.container}>
              <div style={styles.content}>
                <Switch>
                  <Route path="/counter" component={Counter} />
                  <Route path="/:subreddit" component={GalleryContainer} />
                  <Redirect from="/" to="/kittens" />
                </Switch>
            </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
