import * as Page from '.';
import Head from 'next/head';
import { Nav, Footer } from 'components';

export const Home = () => (
  <div data-testid="Home">
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
    <Page.Presentation />
    <Page.ProjectsGroup />
    <Page.Skills />
    <Page.AboutMe />
  </div>
);
