import React from 'react';
import './personal-icon.scss';

type Props = {
  title: string;
  className?: string;
  size?: number;
};

const PersonalIcon = ({ title, className, size = 19 }: Props) => (
  <img
    className={className}
    style={{ height: `${size}px` }}
    src={require(`assets/personal-icons/${title}.png`)}
  />
);

export default PersonalIcon;
