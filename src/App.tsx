import React from 'react';
import './App.scss';
import { Router } from '@reach/router';
import { Home } from 'components/home';

const App = () => (
  <div data-testid="App" className="App">
    <Router>
      <Home path="/" />
    </Router>
  </div>
);

export default App;
