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
  backgroundColor?: string;
};

const Icon = ({
  title,
  className,
  imgClassName,
  size = 61,
  backgroundColor = '#E3EEF7',
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
      />
    </div>
  );
};

export default Icon;
