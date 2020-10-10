import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const WorkInfo = ({ children }: Props) => (
  <div className="Work__info">{children}</div>
);

export default WorkInfo;
