import { ReactNode } from 'react';
import styles from './bluebutton.module.scss';

type Props = {
  children: ReactNode;
  type?: 'default' | 'about-me' | 'presentation';
};
const BlueButton = ({ children, type = 'default' }: Props) => (
  <button
    type="button"
    className={`${styles.bluebutton} ${styles[`bluebutton--${type}`]}`}
  >
    {children}
  </button>
);

export default BlueButton;
