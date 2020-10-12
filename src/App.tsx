import React from 'react';
import './App.scss';
import { Projects } from 'components/sections/projects';
import { Nav } from 'components/nav';
import { Presentation } from './components/sections/presentation';
import { Skills } from 'components/sections/skills';

const App = () => (
  <div className="App">
    <Nav />
    <Presentation />
    <Projects />
    <Skills />
  </div>
);

export default App;
