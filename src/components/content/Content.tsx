import React, { ReactNode, useEffect, useState } from 'react';
import './content.scss';
import { useMediaQuery } from 'react-responsive';

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

  const is768 = useMediaQuery({ maxWidth: 768 });

  return is768 ? (
    <div
      className="Content"
      style={{
        marginTop: marginTop
          ? marginTop
          : type === 'story'
          ? 60
          : type === 'lessons learned'
          ? 70
          : 0,
      }}
    >
      <div className="Content__text">
        <h1 className="Content__title">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        {type === 'story' ? (
          <div
            className={`Content__illustration Content__illustration--story ${className}`}
          >
            <img className="Content__img" alt="illustration" src={currentImg} />
          </div>
        ) : null}
        {type === 'lessons learned' ? (
          <div
            className={`Content__illustration Content__illustration--lessons-learned ${className}`}
          >
            <img className="Content__img" alt="illustration" src={currentImg} />
          </div>
        ) : null}
        {type === 'challenges' ? (
          <div className={`Content__illustration ${className}`}>
            <img
              className="Content__img Content__img--challenges"
              alt="illustration"
              src={currentImg}
            />
          </div>
        ) : null}
        <p className="Content__description">{children}</p>
      </div>
    </div>
  ) : (
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
        <div
          className={`Content__illustration Content__illustration--lessons-learned ${className}`}
        >
          <img className="Content__img" alt="illustration" src={currentImg} />
        </div>
      ) : null}
      <div className="Content__text">
        <h1 className="Content__title">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <p className="Content__description">{children}</p>
      </div>
      {type === 'story' ? (
        <div
          className={`Content__illustration Content__illustration--story ${className}`}
        >
          <img className="Content__img" alt="illustration" src={currentImg} />
        </div>
      ) : null}
      {type === 'challenges' ? (
        <div className={`Content__illustration ${className}`}>
          <img
            className="Content__img Content__img--challenges"
            alt="illustration"
            src={currentImg}
          />
        </div>
      ) : null}
    </div>
  );
};
