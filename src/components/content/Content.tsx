import React, { ReactNode, useEffect, useState } from 'react';
import './content.scss';

type Props = {
  children: ReactNode;
  type: 'story' | 'challenges' | 'lessons learned';
  className?: string;
  marginTop?: number;
};

export const Content = ({ children, type, className, marginTop }: Props) => {
  const [currentImg, setCurrentImg] = useState();
  useEffect(() => {
    const requireImage = async () => {
      const img = await import(`assets/content-illustrations/${type}.svg`);
      setCurrentImg(img.default);
    };
    requireImage();
  }, []);

  return (
    <div
      className="Content"
      style={{
        marginTop: marginTop
          ? marginTop
          : type === 'story'
          ? 158
          : type === 'lessons learned'
          ? 121
          : 0,
      }}
    >
      {type === 'lessons learned' ? (
        <div className={`Content__illustration--lessons-learned ${className}`}>
          <img className="Content__img" alt="illustration" src={currentImg} />
        </div>
      ) : null}
      <div className="Content__text">
        <h1 className="Content__title">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <p className="Content__description">{children}</p>
      </div>
      {type === 'challenges' ? (
        <div className={`Content__illustration ${className}`}>
          <img className="Content__img" alt="illustration" src={currentImg} />
        </div>
      ) : null}
    </div>
  );
};
