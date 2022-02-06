import 'styles/global.css';
import { AppProps } from 'next/app';
import { Footer, Nav } from 'components';
import { NextPage } from 'next';
import classNames from 'classnames';

type AppPropsWithClassName = AppProps & {
  Component: NextPage & {
    className?: string;
  };
};

const App = ({ Component, pageProps }: AppPropsWithClassName) => {
  return (
    <div className={classNames(Component.className, 'h-full')}>
      <Nav />
      <main className="container">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
