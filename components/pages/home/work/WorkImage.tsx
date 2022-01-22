import classNames from 'classnames';
import styles from './work.module.scss';
import Image from 'next/image';

type ImageProps = { image: 'first' };

export const WorkImage = ({ image }: ImageProps) => {
  return (
    <div
      className={classNames(
        'overflow-hidden relative ml-4 w-full',
        styles.image
      )}
    >
      <Image
        alt="work demo"
        layout="fill"
        src={`/assets/work-images/${image}.png`}
      />
    </div>
  );
};
