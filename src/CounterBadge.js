import React from 'react';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import Cake from 'material-ui-icons/Cake';
import { Link } from 'react-router-dom';

export default () =>
  <Link to="/counter">
    <IconButton color="contrast">
      <Badge color="accent" badgeContent={0}>
        <Cake />
      </Badge>
    </IconButton>
  </Link>;
