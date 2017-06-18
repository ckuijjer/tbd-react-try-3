import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppBar from './AppBar';
import GalleryContainer from './GalleryContainer';

class App extends Component {
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
      <Router>
        <div>
          <AppBar />
          <div style={styles.container}>
            <div style={styles.content}>
              <Switch>
                <Route path="/:subreddit" component={GalleryContainer} />
                <Redirect from="/" to="/kittens" />
              </Switch>
          </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
