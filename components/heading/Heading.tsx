import { ReactNode } from 'react';
import styles from './heading.module.scss';

type Props = {
  children: ReactNode;
  marginTop?: number;
};

const Heading = ({ children, marginTop }: Props) => (
  <h6 style={{ marginTop }} className={styles.heading}>
    {children}
  </h6>
);

export default Heading;
