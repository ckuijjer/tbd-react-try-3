import React from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui-icons/Add';
import Remove from 'material-ui-icons/Remove';
import { createStore } from 'redux';

const Counter = ({ value = 0, onDecrement, onIncrement }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <Typography type="display4">
        {value}
      </Typography>
      <div>
        <IconButton onClick={onDecrement}>
          <Remove />
        </IconButton>
        <IconButton onClick={onIncrement}>
          <Add />
        </IconButton>
      </div>
    </div>
  );
};

// Internal state example
// class CounterContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: 0,
//     };
//   }

//   decrement = () => {
//     this.setState({ value: this.state.value - 1 });
//   };

//   increment = () => {
//     this.setState({ value: this.state.value + 1 });
//   };

//   render() {
//     return (
//       <Counter
//         value={this.state.value}
//         onDecrement={this.decrement}
//         onIncrement={this.increment}
//       />
//     );
//   }
// }

// Plain Redux
const reducer = (state, action) => {
  switch (action.type) {
    case 'DECREMENT':
      return state - 1;
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer, 0);

class CounterContainer extends React.Component {
  state = {
    value: store.getState(),
  };

  unsubscribe = store.subscribe(() => {
    this.setState({ value: store.getState() });
  });

  componentWillUnmount() {
    this.unsubscribe();
  }

  decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
  };

  increment = () => {
    store.dispatch({ type: 'INCREMENT' });
  };

  render() {
    return (
      <Counter
        value={this.state.value}
        onDecrement={this.decrement}
        onIncrement={this.increment}
      />
    );
  }
}

export default CounterContainer;
