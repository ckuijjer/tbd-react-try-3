import React from 'react';
import { createStore } from 'redux';
import Button from './Button';

import reducer, { increment, decrement } from './redux/counter';

const store = createStore(reducer, 0);

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      value: 0,
    };

    store.subscribe(() => this.setState({ value: store.getState() }));
  };

  render() {
    return (
      <CounterPresentational
        value={this.state.value}
        onDecrement={() => store.dispatch(decrement())}
        onIncrement={() => store.dispatch(increment())}
      />
    );
  }
}

const CounterPresentational = ({ value, onDecrement, onIncrement }) => (
  <div style={styles.container}>
    <div style={styles.text}>{value}</div>
    <div>
      <Button style={styles.button} onClick={onDecrement}>-</Button>
      <Button style={styles.button} onClick={onIncrement}>+</Button>
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  text: {
    fontSize: 72,
    color: '#333'
  },
  button: {
    margin: 8,
  }
}