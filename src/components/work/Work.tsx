import React, { ReactNode } from 'react';
import './work.scss';

type Props = { children: ReactNode };

const Work = ({ children }: Props) => {
  return <div className="Work">{children}</div>;
};

export default Work;
