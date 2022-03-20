import classNames from 'classnames';
import * as React from 'react';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export const Heading = ({ children, className }: HeadingProps) => (
  <h6
    className={classNames(
      'font-bold text-sm font-montserrat text-dark',
      className
    )}
  >
    {children}
  </h6>
);
