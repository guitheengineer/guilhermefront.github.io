import styles from './icon.module.scss';
import { Tech } from 'types';
import Image from 'next/image';

export type IconProps = {
  title: Tech;
  type: 'work-icon' | 'profile' | 'skill';
  className?: string;
  size?: number;
  imgSize?: number;
};

export const Icon = ({
  title,
  className,
  size = 45,
  imgSize = 24,
  type,
}: IconProps) => {
  return (
    <div
      style={
        !className
          ? {
              width: size,
              height: size,
            }
          : undefined
      }
      className={`${styles.icon} ${styles[`icon__${type}`]} ${
        styles[`icon__${type}--${title}`]
      }`}
    >
      <Image
        alt={title}
        width={imgSize}
        height={imgSize}
        src={`/assets/skill-icons/${title}.svg`}
      />
    </div>
  );
};
