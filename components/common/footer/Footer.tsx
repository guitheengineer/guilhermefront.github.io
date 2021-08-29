import styles from './footer.module.scss';

export const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.footer__content}>
      <p
        className={`${styles.footer__paragraph} ${styles['footer__paragraph--feedback']}`}
      >
        Your feedback is appreciated!
      </p>
      <p
        className={`${styles.footer__paragraph} ${styles['footer__paragraph--me']}`}
      >
        Guilherme Samuel
        <br />
        Front-end developer
      </p>
      <p
        className={`${styles.footer__paragraph} ${styles['footer__paragraph--contact']}`}
      >
        guilhermesnd14@gmail.com
      </p>
    </div>
  </div>
);
