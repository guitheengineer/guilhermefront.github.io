import React, { CSSProperties } from 'react';
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
      <img
        src={require(`assets/skill-icons/${title}.svg`)}
        className={imgClassName}
      />
    </div>
  );
};

export default Icon;
