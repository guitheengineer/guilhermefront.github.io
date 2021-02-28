import { SeeMoreTypes } from 'types';
import styles from './see-more.module.scss';

const SeeMore = ({ seeMore, setSeeMore }: SeeMoreTypes) => (
  <button
    className={styles['see-more']}
    onClick={() => setSeeMore((prevState) => !prevState)}
  >
    <span className={styles['see-more__title']}>See more</span>
    <svg
      className={styles['see-more__icon']}
      width="13"
      height="8"
      style={{ transform: seeMore ? `rotate(180deg)` : `rotate(0deg)` }}
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6.5 6.5L12 1"
        stroke="#6492A4"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default SeeMore;
