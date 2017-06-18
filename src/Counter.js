import React from 'react';
import { createStore } from 'redux';
import Button from './Button';

const reducer = (state, action) => {
  console.log('reducer', state, action);

  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

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
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
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