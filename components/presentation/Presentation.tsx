import styles from './presentation.module.scss';
import Image from 'next/image';
import { BlueButton, Profile } from 'components';

const Presentation = () => (
  <div className={styles.presentation}>
    <section className={styles.presentation__call}>
      <h1 className={styles.presentation__heading}>
        <span className={styles.presentation__icon}>
          <Image width={30} height={31} alt="" src="/assets/notebook.svg" />
        </span>
        I build apps with
        <span className={styles.presentation__strong}>
          {' '}
          awesome code quality.
        </span>
      </h1>
      <p className={styles.presentation__paragraph}>
        As a React developer, I have been writing code that is trustable, clean
        and easy to maintain.
      </p>
      <a href="mailto:gsdevelopercontact@gmail.com">
        <BlueButton type="presentation">Contact</BlueButton>
      </a>
    </section>
    <Profile />
  </div>
);
export default Presentation;
