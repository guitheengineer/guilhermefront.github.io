import classNames from 'classnames';
import styles from './work.module.scss';

type ImageProps = { image: 'first' };

export const WorkImage = ({ image }: ImageProps) => {
  return (
    <div className={classNames('overflow-hidden relative ml-4', styles.image)}>
      <img alt="work demo" src={`assets/work-images/${image}.png`} />
    </div>
  );
};
