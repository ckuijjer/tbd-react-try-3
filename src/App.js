import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import GalleryContainer from './GalleryContainer';
import Navigation from './Navigation';
import Counter from './Counter';

class App extends Component {
  render() {
    const styles = {
      container: {
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 'calc(100vh - 64px)',
        marginTop: 64,
      },
      content: {
        backgroundColor: '#fff',
        flex: 1,
        maxWidth: 768,
        padding: 16,
        boxSizing: 'border-box',
      },
    };

    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Route path="/:subreddit" component={Navigation} />
            <div style={styles.container}>
              <div style={styles.content}>
                <Switch>
                  <Route path="/counter" component={Counter} />
                  <Route path="/:subreddit" component={GalleryContainer} />
                  <Redirect from="/" to="/kitty" />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
