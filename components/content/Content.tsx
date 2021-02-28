import { ReactNode, useEffect, useState } from 'react';
import styles from './content.module.scss';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

type ContentTypes = 'story' | 'challenges' | 'lessons learned';

type Props = {
  children: ReactNode;
  type: ContentTypes;
  marginTop?: number;
};

const Illustration = ({ type }: { type: ContentTypes }) => (
  <Image
    width={330}
    height={330}
    className={styles.content__img}
    alt="illustration"
    src={`assets/content-illustrations/${type}.svg`}
  />
);

const Content = ({ children, type, marginTop }: Props) => {
  const is768 = useMediaQuery({ maxWidth: 768 });

  if (is768) {
    return (
      <div
        className={styles.content}
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
        <div className={styles.content__text}>
          <h1 className={styles.content__title}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </h1>
          {type === 'story' ? (
            <div
              className={`${styles.content__illustration} ${styles['content__illustration--story']}`}
            ></div>
          ) : null}
          {type === 'lessons learned' ? (
            <div
              className={`${styles.content__illustration} ${styles['content__illustration--lessons-learned']} `}
            >
              <Illustration type={type} />
            </div>
          ) : null}
          {type === 'challenges' ? (
            <div className={styles.content__illustration}>
              <Illustration type={type} />
            </div>
          ) : null}
          <p className={styles.content__description}>{children}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={styles.content}
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
          className={`${styles.content__illustration} ${styles['content__illustration--challenges']}`}
        >
          <Illustration type={type} />
        </div>
      ) : null}
      <div className={styles.content__text}>
        <h1 className={styles.content__title}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h1>
        <p className={styles.content__description}>{children}</p>
      </div>
      {type === 'lessons learned' ? (
        <div
          className={`${styles.content__illustration} ${styles['content__illustration--lessons-learned']}`}
        >
          <Illustration type={type} />
        </div>
      ) : null}
      {type === 'story' ? (
        <div
          className={`${styles.content__illustration} ${styles['content__illustration--story']}`}
        >
          <Illustration type={type} />
        </div>
      ) : null}
    </div>
  );
};

export default Content;
