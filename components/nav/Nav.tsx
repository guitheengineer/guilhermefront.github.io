import { PersonalIcon } from 'components';
import styles from './nav.module.scss';
import Link from 'next/link';

const Nav = ({ className }: { className?: string }) => (
  <nav className={`${styles.nav} ${className}`}>
    <Link href="/">
      <a className={styles.nav__title}>Guilherme Samuel</a>
    </Link>
    <ul className={styles.nav__list}>
      <PersonalIcon title="github" />
      <PersonalIcon title="linkedin" />
    </ul>
  </nav>
);

export default Nav;
