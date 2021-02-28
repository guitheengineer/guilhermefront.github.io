import styles from './personal-icon.module.scss';
import Image from 'next/image';
type Props = {
  title: 'github' | 'linkedin';
  className?: string;
  size?: number;
};

const PersonalIcon = ({ title, size = 19 }: Props) => (
  <a
    href={`${
      title === 'github'
        ? 'https://github.com/gsdeveloper'
        : 'https://www.linkedin.com/in/guilherme-samuel-2aa7aa19b/'
    }`}
    className={styles[`personal-icon--${title}`]}
  >
    <Image
      alt={`${title} icon`}
      width={size}
      height={size}
      src={`/assets/personal-icons/${title}.svg`}
    />
  </a>
);

export default PersonalIcon;
