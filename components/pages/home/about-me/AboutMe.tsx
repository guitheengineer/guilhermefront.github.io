import styles from './about-me.module.scss';
import { Button, Heading } from 'components';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

const GameBoy = ({ is800 = false }: { is800?: boolean }) => (
  <Image layout="fill" alt="" src="/assets/gameboy.svg" />
);

export const AboutMe = () => {
  return (
    <div className="flex justify-between align-start mt-20 lg:mt-36 mb-16">
      <div className="lg:mr-24">
        <Heading>About me</Heading>
        <div className="lg:hidden relative mx-auto w-52 h-80 mt-3">
          <GameBoy is800 />
        </div>
        <p className="mt-4 text-sm font-montserrat text-suave-clear">
          Playing games since I was a kid, I saw that the challenges I usually
          solved in those games are also present in the programming area, which
          is where I found myself able to build useful tools for people. So,
          since I entered college at seventeen, I decided to dedicate all my
          efforts in this area. Currently I’m working intensively with React and
          NextJS on a large scale project. In my free time I love studying UX/UI
          concepts to reach a better visual design and user experience of the
          projects i&apos;m involved.
        </p>
        <Heading className="mt-9">Education</Heading>
        <h6 className="text-suave-clear font-medium text-sm mt-4 font-montserrat">
          Analysis and Systems Development, FECAF
        </h6>
        <p className="font-medium text-xs mt-2 text-suave-opaque font-montserrat">
          FEB 2019 - MAY 2021 / São Paulo
        </p>
        <p className="mt-3 text-sm font-montserrat text-suave-clear">
          In addition to the traditional learning and college subjects, we
          simulated the creation of startups and worked on the development of
          products using both Front and Back End stacks.
        </p>
        <a
          href="https://pdfhost.io/0ad5c657-36ac-4752-a8a2-91d1a646a2cb"
          download
        >
          <Button>Download resume</Button>
        </a>
      </div>
      <div className="hidden lg:block flex-shrink-0 w-5/12 -mt-32 h-auto relative">
        <GameBoy />
      </div>
    </div>
  );
};
