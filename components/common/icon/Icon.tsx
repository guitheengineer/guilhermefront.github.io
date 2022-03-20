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
      style={{
        width: size,
        height: size,
      }}
      className={classNames(
        'flex rounded-full justify-center items-center cursor-pointer bg-[#e3eef7]',
        styles[type],
        styles[`${type}${title}`],
        className
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
