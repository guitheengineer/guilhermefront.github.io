import Image from 'next/image';
import styles from './screen.module.scss';

type Props = {
  title: string;
  description: string;
};

export const Screen = ({ title, description }: Props) => {
  return (
    <li className={styles.screen}>
      <h3 className={styles.screens__title}>{title}</h3>
      <Image
        width={200}
        height={350}
        className={styles.screens__img}
        src={`/assets/screens/${title.toLowerCase()}`}
      />
      <p className={styles.screens__paragraph}>{description}</p>
    </li>
  );
};
