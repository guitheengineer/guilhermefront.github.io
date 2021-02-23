import { Footer } from 'components/footer';
import { AboutMe } from 'components/sections/about-me';
import { Presentation } from 'components/sections/presentation';
import { ProjectsGroup } from 'components/sections/projects-group';
import { Skills } from 'components/sections/skills';
import { RouteComponentProps } from '@reach/router';
import './home.scss';
import { Nav } from 'components/nav';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home = (_props: RouteComponentProps) => (
  <div data-testid="Home" className="home">
    <Nav />
    <Presentation />
    <ProjectsGroup />
    <Skills />
    <AboutMe />
    <Footer />
  </div>
);

export default Home;
