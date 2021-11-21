import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './heading.module.scss';

type Props = {
  children: ReactNode;
  marginTop?: number;
  className?: string;
};

export const Heading = ({ children, marginTop, className }: Props) => (
  <h6 style={{ marginTop }} className={classNames(styles.heading, className)}>
    {children}
  </h6>
);
