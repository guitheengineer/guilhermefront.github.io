import React, { ReactNode } from 'react';
import './work.scss';
import { navigate } from '@reach/router';

type Props = { children: ReactNode; title: string };

const Work = ({ children, title }: Props) => (
  <button
    onClick={() => navigate(`/projects/${title}`)}
    type="button"
    className="Work"
  >
    {children}
  </button>
);

export default Work;
