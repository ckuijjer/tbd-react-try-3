import React from 'react';
import Button from './Button';

const Counter = ({ value = 0, onDecrement, onIncrement }) => {
  // Counter styling
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    text: {
      fontSize: 72,
      color: '#333',
    },
    button: {
      margin: 8,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.text}>
        {value}
      </div>
      <div>
        <Button style={styles.button} onClick={onDecrement}>
          -
        </Button>
        <Button style={styles.button} onClick={onIncrement}>
          +
        </Button>
      </div>
    </div>
  );
};

class CounterContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
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
