import React, { useEffect, useState } from 'react';
import './personal-icon.scss';

type Props = {
  title: 'github' | 'linkedin';
  className?: string;
  size?: number;
};

const PersonalIcon = ({ title, className, size = 19 }: Props) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    const imageRequire = async () => {
      const img = await import(`assets/personal-icons/${title}.svg`);
      setCurrentImg(img.default);
    };
    imageRequire();
  }, []);

  return (
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
        src={currentImg}
      />
    </a>
  );
};

export default PersonalIcon;
