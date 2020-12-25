import React, { ReactNode } from 'react';
import './content.scss';

type Props = {
  children: ReactNode;
  type: 'story' | 'challenges' | 'learned';
};

const icons = require.context(
  'assets/content-illustrations',
  false,
  /\.(png|jpe?g|svg)$/
);

export const Content = ({ children, type }: Props) => (
  <div className="content">
    <div className="content__text">
      <h1 className="content__title">{type}</h1>
      <p className="content__description">{children}</p>
    </div>
    {type === 'learned' || type === 'challenges' ? (
      <div className="content__illustration">
        <img
          className="content__img"
          alt="illustration"
          src={icons(`./${type}.svg`).default}
        />
      </div>
    ) : null}
  </div>
);
