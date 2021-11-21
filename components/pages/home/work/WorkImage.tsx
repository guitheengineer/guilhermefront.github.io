import styles from './work.module.scss';

type ImageProps = { image: 'first' };

export const WorkImage = ({ image }: ImageProps) => {
  return (
    <div className={styles.work__image}>
      <img alt="work demo" src={`assets/work-images/${image}.png`} />
    </div>
  );
};