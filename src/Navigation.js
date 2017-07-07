import React from 'react';
import AppBar from 'material-ui/AppBar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import MenuIcon from 'material-ui-icons/Menu';
import CounterBadge from './CounterBadge';

import subreddits from './subreddits';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  openDrawer = () => {
    this.setState({ drawerOpen: true });
  };

  closeDrawer = () => {
    this.setState({ drawerOpen: false });
  };

  render() {
    const { subreddit } = this.props.match.params;

    const go = to => () => {
      this.closeDrawer();
      this.props.history.push(`/${to}`);
    };

    return (
      <div>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton color="contrast" onClick={this.openDrawer}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" style={{ flex: 1 }}>
              {subreddit}
            </Typography>
            <CounterBadge />
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawerOpen} onRequestClose={this.closeDrawer}>
          <List>
            <ListItem button onClick={go('counter')}>
              <ListItemText primary="counter" />
            </ListItem>
            <Divider />

            {subreddits.map(subreddit =>
              <ListItem button key={subreddit} onClick={go(subreddit)}>
                <ListItemText primary={subreddit} />
              </ListItem>
            )}
          </List>
        </Drawer>
      </div>
    );
  }
}
