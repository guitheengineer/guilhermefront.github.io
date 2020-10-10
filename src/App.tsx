import { Presentation } from './components/presentation';
import { BlueButton } from './components/blue-button';
import { Nav } from 'components/nav';
import React from 'react';
import './App.scss';
import { Projects } from 'components/projects';

const App = () => (
  <div className="App">
    <Nav />
    <Presentation />
    <Projects />
  </div>
);

export default App;
