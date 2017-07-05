import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

import * as actions from './redux/counter';

const Counter = ({ value, onDecrement, onIncrement }) =>
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
  </div>;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Counter styling
    alignItems: 'center'
  },
  text: {
    fontSize: 72,
    color: '#333'
  },
  button: {
    margin: 8
  }
};

const mapStateToProps = ({ counter }) => ({
  value: counter
});

const mapDispatchToProps = {
  onIncrement: actions.increment,
  onDecrement: actions.decrement
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
