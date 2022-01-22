import 'styles/global.scss';
import { AppProps } from 'next/app';
import { Footer, Nav } from 'components';
import { NextPage } from 'next';

type AppPropsWithClassName = AppProps & {
  Component: NextPage & {
    className?: string;
  };
};

const App = ({ Component, pageProps }: AppPropsWithClassName) => {
  return (
    <div className={Component.className}>
      <Nav />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
