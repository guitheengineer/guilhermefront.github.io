import React, { useEffect, useState } from 'react';
import './icon.scss';

export type IconProps = {
  title:
    | 'react'
    | 'redux'
    | 'sass'
    | 'styled-components'
    | 'mongo'
    | 'node'
    | 'html'
    | 'css'
    | 'figma'
    | 'typescript';
  className?: string;
  imgClassName?: string;
  size?: number;
};

const Icon = ({ title, className, imgClassName, size = 50 }: IconProps) => {
  const [currentImg, setCurrentImg] = useState('');
  useEffect(() => {
    const requireImage = async () => {
      const img = await import(`assets/skill-icons/${title}.svg`);
      setCurrentImg(img.default);
    };
    requireImage();
  }, []);

  return (
    <div
      style={
        !className
          ? {
              width: `${size / 10}rem`,
              height: `${size / 10}rem`,
            }
          : undefined
      }
      className={`Icon ${className}`}
    >
      <img alt={`${title} icon`} src={currentImg} className={imgClassName} />
    </div>
  );
};

export default Icon;
