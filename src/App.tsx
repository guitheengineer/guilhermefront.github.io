import React from 'react';
import './App.scss';
import { Projects } from 'components/sections/projects';
import { Nav } from 'components/nav';
import { Presentation } from './components/sections/presentation';
import { Skills } from 'components/sections/skills';
import { AboutMe } from 'components/sections/about-me';
import { Footer } from 'components/footer';

const App = () => (
  <div className="App">
    <Nav />
    <Presentation />
    <Projects />
    <Skills />
    <AboutMe />
    <Footer />
  </div>
);

export default App;
