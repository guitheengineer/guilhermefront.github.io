import React from 'react';
import './personal-icon.scss';

type Props = {
  title: 'github' | 'linkedin';
  className?: string;
  size?: number;
};

const PersonalIcon = ({ title, className, size = 19 }: Props) => (
  <a
    href={`${
      title === 'github'
        ? 'https://github.com/gsdeveloper'
        : 'https://www.linkedin.com/in/guilherme-samuel-2aa7aa19b/'
    }`}
  >
    <img
      alt={`${title} icon`}
      className={`Personal-icon ${className}`}
      style={{ height: `${size}px` }}
      src={require(`assets/personal-icons/${title}.svg`)}
    />
  </a>
);

export default PersonalIcon;
