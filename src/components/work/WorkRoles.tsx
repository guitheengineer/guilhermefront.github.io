import React, { ReactNode } from 'react';
import './work.scss';

type Props = { children: ReactNode };

const WorkRoles = ({ children }: Props) => {
  return <ul className="Work__roles">{children}</ul>;
};

export default WorkRoles;
