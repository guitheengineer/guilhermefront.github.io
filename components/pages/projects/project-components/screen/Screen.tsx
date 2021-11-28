import classNames from 'classnames';
import Image from 'next/image';
import styles from './screen.module.scss';

type Props = {
  title: string;
  description: string;
};

export const Screen = ({ title, description }: Props) => (
  <li className={classNames('mt-8', styles.screen)}>
    <h3 className="font-medium text-sm text-suave-dark">{title}</h3>
    <Image
      alt={title}
      width={200}
      height={350}
      className="mt-3 w-full h-auto"
      src={`/assets/screens/${title.toLowerCase()}`}
    />
    <p className={classNames('mt-3 text-sm', styles.paragraph)}>
      {description}
    </p>
  </li>
);
