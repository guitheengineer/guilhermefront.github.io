import React from 'react';
import './heading.scss';

type Props = {
  title: 'Projects' | 'About me' | 'Skills';
  className?: string;
};

const Heading = ({ title, className }: Props) => {
  return <h6 className={`Heading ${className}`}>{title}</h6>;
};

export default Heading;
