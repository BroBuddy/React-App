import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron>
          <h1 className="display-3">ReactJS</h1>
          <p className="lead">A little reactJS project included some fancy stuff.</p>
          <hr className="my-2" />
          <p>Dive into it...</p>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
