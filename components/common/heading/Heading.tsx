import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './heading.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: Props) => (
  <h6 className={classNames(styles.heading, className)}>{children}</h6>
);
