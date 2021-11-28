import classNames from 'classnames';
import { SeeMoreTypes } from 'types';
import styles from './see-more.module.scss';

export const SeeMore = ({ seeMore, setSeeMore, className }: SeeMoreTypes) => (
  <button
    className={classNames(
      'flex ml-auto cursor-pointer mt-3 items-center text-green-900',
      className
    )}
    type="button"
    onClick={() => setSeeMore((prevState) => !prevState)}
  >
    <span className="text-sm font-montserrat">See more</span>
    <svg
      className={styles.icon}
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
