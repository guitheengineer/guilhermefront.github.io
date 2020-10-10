import React, { ReactNode } from 'react';
import './work.scss';

type Props = { children: ReactNode };

const WorkStack = ({ children }: Props) => {
  return <ul className="Work__stack">{children}</ul>;
};

export default WorkStack;
