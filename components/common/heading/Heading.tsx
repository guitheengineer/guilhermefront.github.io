import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './heading.module.scss';

type HeadingProps = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => (
  <h6 className={classNames(styles.heading, className)}>{children}</h6>
);
