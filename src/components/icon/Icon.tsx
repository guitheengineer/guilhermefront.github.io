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
  imgSize?: number;
  size?: number;
  backgroundColor?: string;
  imgStyle?: CSSProperties;
};

const Icon = ({
  title,
  className,
  imgClassName,
  imgSize = 18,
  size = 61,
  backgroundColor = '#E3EEF7',
  imgStyle,
}: IconProps) => {
  return (
    <div
      style={{
        width: `${size / 10}rem`,
        height: `${size / 10}rem`,
        backgroundColor,
      }}
      className={`Icon ${className}`}
    >
      <img
        src={require(`assets/skill-icons/${title}.png`)}
        className={imgClassName}
        style={{
          width: `${imgSize / 10}rem`,
          height: `${imgSize / 10}rem`,
          ...imgStyle,
        }}
      />
    </div>
  );
};

export default Icon;
