import React, { ReactNode } from 'react';
import './work.scss';

type Props = { children: ReactNode };

const WorkCompany = ({ children }: Props) => (
  <h4 className="Work__company">{children}</h4>
);

export default WorkCompany;
