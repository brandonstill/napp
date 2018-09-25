import React, { Component } from 'react';
import NavBar from '../NavBar'
import Contact from '../Contact';

class App extends Component {
  render() {
    return (
      <div style={{ overflow: 'hidden' }}>
        <NavBar />
        <Contact />
      </div>
    )
  }
}

export default App;