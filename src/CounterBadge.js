import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Cake from 'material-ui-icons/Cake';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CounterBadge = ({ value }) =>
  <Link to="/counter">
    <IconButton color="contrast">
      <Badge color="accent" badgeContent={value}>
        <Cake />
      </Badge>
    </IconButton>
  </Link>;

const mapStateToProps = ({ counter }) => ({
  value: counter,
});

export default connect(mapStateToProps)(CounterBadge);
