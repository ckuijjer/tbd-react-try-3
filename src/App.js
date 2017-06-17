import React, { Component } from 'react';
import GalleryContainer from './GalleryContainer';

class App extends Component {
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
      <div style={styles.container}>
        <div style={styles.content}>
          <GalleryContainer />
        </div>
      </div>
    );
  }
}

export default App;
