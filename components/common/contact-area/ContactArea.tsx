import classNames from 'classnames';
import styles from './contact-area.module.scss';

export const ContactArea = () => (
  <div
    className={classNames(
      'mx-auto max-w-md h-96 mt-20 md:mt-7 flex justify-center items-center flex-col text-center',
      styles.contact
    )}
  >
    <h2 className="font-montserrat font-medium text-suave-dark">
      Thank you for reading it!
    </h2>
    <a
      className="mt-4 grid place-content-center w-28 h-11 bg-suave-blue rounded-full"
      href="mailto:guilhermesnd14@gmail.com"
    >
      <button
        type="button"
        className="font-poppins font-medium text-sm text-white"
      >
        Contact
      </button>
    </a>
  </div>
);
