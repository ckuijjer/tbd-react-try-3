import React from 'react';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Add from 'material-ui-icons/Add';
import Remove from 'material-ui-icons/Remove';
import { connect } from 'react-redux';
import * as actions from './redux/counter';

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

const mapStateToProps = ({ counter }) => ({
  value: counter,
});

const mapDispatchToProps = {
  onDecrement: actions.decrement,
  onIncrement: actions.increment,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
