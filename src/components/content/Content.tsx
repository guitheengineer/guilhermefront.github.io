import React, { ReactNode, useEffect, useState } from 'react';
import './content.scss';
import { useMediaQuery } from 'react-responsive';

type Props = {
  children: ReactNode;
  type: 'story' | 'challenges' | 'lessons learned';
  className?: string;
  marginTop?: number;
};

const Content = ({ children, type, className, marginTop }: Props) => {
  const [currentImg, setCurrentImg] = useState();
  useEffect(() => {
    import(`assets/content-illustrations/${type}.svg`).then((img) =>
      setCurrentImg(img.default)
    );
  }, []);

  const is768 = useMediaQuery({ maxWidth: 768 });

  if (is768) {
    return (
      <div
        className="Content"
        style={{
          marginTop: marginTop
            ? marginTop
            : type === 'story'
            ? 70
            : type === 'challenges'
            ? 70
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
              <img
                className="Content__img"
                alt="illustration"
                src={currentImg}
              />
            </div>
          ) : null}
          {type === 'lessons learned' ? (
            <div
              className={`Content__illustration Content__illustration--lessons-learned ${className}`}
            >
              <img
                className="Content__img"
                alt="illustration"
                src={currentImg}
              />
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
    );
  }

  return (
    <div
      className="Content"
      style={{
        marginTop: marginTop
          ? marginTop
          : type === 'story'
          ? 158
          : type === 'challenges'
          ? 80
          : type === 'lessons learned'
          ? 121
          : 0,
      }}
    >
      {type === 'challenges' ? (
        <div
          className={`Content__illustration Content__illustration--challenges ${className}`}
        >
          <img
            className="Content__img Content__img--challenges"
            alt="illustration"
            src={currentImg}
          />
        </div>
      ) : null}
      <div className="Content__text">
        <h1 className="Content__title">
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <p className="Content__description">{children}</p>
      </div>
      {type === 'lessons learned' ? (
        <div
          className={`Content__illustration Content__illustration--lessons-learned ${className}`}
        >
          <img className="Content__img" alt="illustration" src={currentImg} />
        </div>
      ) : null}
      {type === 'story' ? (
        <div
          className={`Content__illustration Content__illustration--story ${className}`}
        >
          <img className="Content__img" alt="illustration" src={currentImg} />
        </div>
      ) : null}
    </div>
  );
};

export default Content;
