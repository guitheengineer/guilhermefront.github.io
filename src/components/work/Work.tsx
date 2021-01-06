import React, { ReactNode } from 'react';
import './work.scss';
import { navigate, useParams } from '@reach/router';

type Props = { children: ReactNode; title: string };

const Work = ({ children, title }: Props) => {
  const { project } = useParams();

  return project !== title.toLowerCase() ? (
    <button
      onClick={() => navigate(`/projects/${title.toLowerCase()}`)}
      type="button"
      className="Work"
    >
      {children}
    </button>
  ) : null;
};

export default Work;
