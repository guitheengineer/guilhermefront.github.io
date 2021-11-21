import styles from './icon.module.scss';
import { Tech } from 'types';
import Image from 'next/image';
import classNames from 'classnames';

export type IconProps = {
  title: Tech;
  type: 'work' | 'profile' | 'skill';
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
      title={title}
      style={
        !className
          ? {
              width: size,
              height: size,
            }
          : undefined
      }
      className={classNames(
        styles.icon,
        styles[type],
        styles[`${type}${title}`]
      )}
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
