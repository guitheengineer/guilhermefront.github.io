import classNames from 'classnames';
import styles from './work.module.scss';
import Image from 'next/image';
import { Projects } from 'types';

type ImageProps = { image: Projects };

export const WorkImage = ({ image }: ImageProps) => {
  return (
    <div className="w-full h-full">
      <div
        className={classNames(
          'overflow-hidden relative mx-auto w-8/12 w-full h-full',
          styles.image
        )}
      >
        <Image
          alt="work demo"
          layout="fill"
          objectFit="contain"
          quality={90}
          src={`/assets/home/project-demos/${image}.png`}
        />
      </div>
    </div>
  );
};
