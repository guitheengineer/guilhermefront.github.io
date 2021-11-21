import styles from './about-me.module.scss';
import { BlueButton, Heading } from 'components';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

const GameBoy = ({ is800 = false }: { is800?: boolean }) => (
  <Image
    className={styles['about-me__img']}
    width={is800 ? 180 : 372}
    height={is800 ? 300 : 515}
    alt="gameboy illustration"
    src={'/assets/gameboy.svg'}
  />
);

export const AboutMe = () => {
  const is800 = useMediaQuery({ maxWidth: 800 });

  return (
    <div className={styles['about-me']}>
      <div className={styles['about-me__text-container']}>
        <Heading>About me</Heading>
        {is800 ? <GameBoy is800 /> : null}
        <p className={styles['about-me__myself']}>
          Playing games since I was a kid, I saw that the challenges I usually
          solved in those games are also present in the programming area, which
          is where I found myself able to build useful tools for people. So,
          since I entered college at seventeen, I decided to dedicate all my
          efforts in this area. Currently I’m working intensively with React and
          NextJS on a large scale project. In my free time I love studying UX/UI
          concepts to reach a better visual design and user experience of the
          projects i&apos;m involved.
        </p>
        <Heading marginTop={38}>Education</Heading>
        <h6 className={styles['about-me__course']}>
          Analysis and Systems Development, FECAF
        </h6>
        <p className={styles['about-me__date']}>
          FEB 2019 - MAY 2021 / São Paulo
        </p>
        <p
          className={`${styles['about-me__myself']} ${styles['about-me__myself--course']}`}
        >
          In addition to the traditional learning and college subjects, we
          simulated the creation of startups and worked on the development of
          products using both Front and Back End stacks.
        </p>
        <a
          href="https://pdfhost.io/0ad5c657-36ac-4752-a8a2-91d1a646a2cb"
          download
        >
          <BlueButton type="about-me">Download resume</BlueButton>
        </a>
      </div>
      {!is800 ? <GameBoy /> : null}
    </div>
  );
};
