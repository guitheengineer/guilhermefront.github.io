import React, { ReactNode } from 'react';
import './heading.scss';

type Props = {
  children: ReactNode;
  className?: string;
};

const Heading = ({ children, className }: Props) => (
  <h6 className={`Heading ${className}`}>{children}</h6>
);

export default Heading;
