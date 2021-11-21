import Image from 'next/image';
import styles from './screen.module.scss';

type Props = {
  title: string;
  description: string;
};

export const Screen = ({ title, description }: Props) => (
  <li className={styles.screen}>
    <h3 className={styles.title}>{title}</h3>
    <Image
      alt={title}
      width={200}
      height={350}
      className={styles.img}
      src={`/assets/screens/${title.toLowerCase()}`}
    />
    <p className={styles.paragraph}>{description}</p>
  </li>
);
