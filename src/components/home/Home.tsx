import React from 'react';
import { Footer } from 'components/footer';
import { Nav } from 'components/nav';
import { AboutMe } from 'components/sections/about-me';
import { Presentation } from 'components/sections/presentation';
import { Projects } from 'components/sections/projects';
import { Skills } from 'components/sections/skills';
import { RouteComponentProps } from '@reach/router';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (props: RouteComponentProps) => (
  <div data-testid="Home">
    <Nav />
    <Presentation />
    <Projects />
    <Skills />
    <AboutMe />
    <Footer />
  </div>
);

export default Home;
