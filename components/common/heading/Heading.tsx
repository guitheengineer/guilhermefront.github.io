import classNames from 'classnames';
import * as React from 'react';
import styles from './heading.module.scss';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => (
  <h6 className={classNames(styles.heading, className)}>{children}</h6>
);
