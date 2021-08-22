import 'styles/global.scss';
import { AppProps } from 'next/app';
import { Footer, Nav } from 'components';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Nav />
    <main className="container">
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
);

export default App;
