import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import counter from './redux/counter';
import AppBar from './AppBar';
import GalleryContainer from './GalleryContainer';
import Counter from './Counter';

class App extends Component {
  constructor(props) {
    super(props);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const rootReducer = combineReducers({
      counter,
      router: routerReducer
    });

    const middleware = routerMiddleware(this.history);

    this.history = createHistory();
    this.store = createStore(rootReducer, composeEnhancers(applyMiddleware(middleware)));
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
        <ConnectedRouter history={this.history}>
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
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
