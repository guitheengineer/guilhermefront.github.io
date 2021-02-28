import {
  Nav,
  ProjectsGroup,
  Skills,
  Presentation,
  AboutMe,
  Footer,
} from 'components';
import styles from 'styles/home.module.scss';
import Head from 'next/head';

const Home = () => (
  <div data-testid="Home" className={styles.home}>
    <Head>
      <title>Portfólio - Guilherme Samuel</title>
      <meta name="title" content="Portfólio - Guilherme Samuel" />
      <meta name="description" content="My projects and info about me" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://gsdeveloper.github.io/" />
      <meta property="og:title" content="Portfólio - Guilherme Samuel" />
      <meta property="og:description" content="My projects and info about me" />
      <meta property="og:image" content="https://i.ibb.co/XJ0sS8r/image.png" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://gsdeveloper.github.io/" />
      <meta property="twitter:title" content="Portfólio - Guilherme Samuel" />
      <meta
        property="twitter:description"
        content="My projects and info about me"
      />
      <meta
        property="twitter:image"
        content="https://i.ibb.co/XJ0sS8r/image.png"
      />
    </Head>
    <Nav />
    <Presentation />
    <ProjectsGroup />
    <Skills />
    <AboutMe />
    <Footer />
  </div>
);

export default Home;
