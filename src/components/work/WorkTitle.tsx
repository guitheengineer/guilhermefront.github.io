import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const WorkTitle = ({ children }: Props) => (
  <h3 className="Work__title">{children}</h3>
);

export default WorkTitle;
