import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware,
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { MuiThemeProvider } from 'material-ui/styles';

import GalleryContainer from './GalleryContainer';
import Navigation from './Navigation';
import Counter from './Counter';
import counter from './redux/counter';
import reddit from './redux/reddit';

class App extends Component {
  constructor(props) {
    super(props);

    const rootReducer = combineReducers({
      counter,
      router: routerReducer,
      reddit,
    });

    this.history = createHistory();

    const composeEnhancers = composeWithDevTools({});
    const middlewares = [routerMiddleware(this.history), thunk];

    this.store = createStore(
      rootReducer,
      {},
      composeEnhancers(applyMiddleware(...middlewares))
    );
  }

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
      <Provider store={this.store}>
        <MuiThemeProvider>
          <ConnectedRouter history={this.history}>
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
          </ConnectedRouter>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
