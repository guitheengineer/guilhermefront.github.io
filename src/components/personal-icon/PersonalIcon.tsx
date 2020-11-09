import React from 'react';
import './personal-icon.scss';

type Props = {
  title: 'github' | 'linkedin';
  className?: string;
  size?: number;
};

const icons = require.context(
  'assets/personal-icons',
  false,
  /\.(png|jpe?g|svg)$/
);
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
      src={icons(`./${title}.svg`).default}
    />
  </a>
);

export default PersonalIcon;
