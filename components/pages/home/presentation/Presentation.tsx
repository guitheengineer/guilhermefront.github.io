import styles from './presentation.module.scss';
import Image from 'next/image';
import { BlueButton, Icon } from 'components';
import classNames from 'classnames';

export const Presentation = () => (
  <div className="mt-28 flex justify-between items-center">
    <section className="md:w-6/12">
      <h1 className="font-bold text-3xl font-poppins text-dark">
        <span className="relative top-1 mr-3">
          <Image width={30} height={31} alt="" src="/assets/notebook.svg" />
        </span>
        I build apps with
        <span className={styles.strong}> awesome code quality.</span>
      </h1>
      <p className="text-suave-light mt-4 font-montserrat">
        As a React developer, I have been writing code that is trustable, clean
        and easy to maintain.
      </p>
      <a href="mailto:guilhermesnd14@@gmail.com">
        <BlueButton type="presentation">Contact</BlueButton>
      </a>
    </section>

    <aside
      className={classNames(
        'hidden md:flex mr-16 bg-white flex-col justify-center h-56 rounded-xl',
        styles.profile
      )}
    >
      <div className="flex flex-col items-center">
        <div
          className={classNames('relative top-2 -left-1 w-20', styles.wrapper)}
        >
          <Image
            width={84}
            height={84}
            alt="profile"
            src={'/assets/profile-picture.png'}
          />
        </div>
        <div className="z-10 flex flex-col items-center justify-center w-36 h-6 rounded-full font-semibold text-xxs text-white font-montserrat bg-blue-light">
          Front end Developer
        </div>
      </div>
      <div>
        <h3 className="mt-4 text-dark font-bold font-montserrat text-center">
          Guilherme Samuel
        </h3>
        <p className="mt-2 text-sm font-medium text-lighter text-center font-montserrat text-suave-lighter">
          São Paulo - Brazil
        </p>
      </div>
      <ul className={classNames('absolute', styles.icons)}>
        <Icon type="profile" imgSize={24} title="react" />
        <Icon type="profile" title="redux" />
        <Icon type="profile" imgSize={22} title="typescript" />
        <Icon type="profile" imgSize={27} title="mongo" />
        <Icon type="profile" imgSize={22} title="html" />
        <Icon type="profile" imgSize={26} title="sass" />
        <Icon type="profile" title="node" />
        <Icon type="profile" imgSize={22} title="css" />
      </ul>
    </aside>
  </div>
);
