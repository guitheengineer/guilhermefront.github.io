import classNames from 'classnames';
import styles from './footer.module.scss';
// background: #e7eff4;

export const Footer = () => (
  <div className={classNames('w-full left-0 absolute h-28', styles.footer)}>
    <div className="container h-full flex items-center justify-center md:justify-between">
      <p className="font-black text-xs font-montserrat text-blue-700 hidden md:block">
        Your feedback is appreciated!
      </p>
      <p className="font-black text-xs font-montserrat text-blue-700">
        Guilherme Samuel
        <br />
        Front-end developer
      </p>
      <p className="font-black text-xs font-montserrat text-blue-700 hidden md:block">
        guilhermesnd14@gmail.com
      </p>
    </div>
  </div>
);
