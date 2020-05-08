import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Lobby from './components/Lobby/Lobby'
import Room from './components/Room/Room'

const App = () => {
    return (
      <Router>
        <Route path="/" exact component={Signin} />
        <Route path="/register" component={Register} />
        <Route path="/lobby" component={Lobby} />
        <Route path="/room" component={Room} />
      </Router>
    );
  }

  export default App