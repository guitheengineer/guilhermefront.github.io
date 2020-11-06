import React from 'react';
import './about-me.scss';
import { BlueButton } from 'components/blue-button';
import { Heading } from 'components/heading';

const AboutMe = () => {
  return (
    <div className="About-me">
      <div className="About-me__text-container">
        <Heading className="About-me__heading" title="About me" />
        <p className="About-me__myself">
          Playing games since I was a kid, I saw that the challenges I usually
          solved in those games are also present in the programming area, which
          is where I found myself able to build useful tools for people. So,
          since I entered college at seventeen, I decided to dedicate all my
          efforts in this area. Currently I’m working intensively with React. In
          my free time I love studying UX/UI concepts to reach a better looking
          and user experience of my personal projects and to give suggestions to
          my clients.
        </p>
        <Heading
          className="About-me__heading About-me__heading--education"
          title="Education"
        />
        <h6 className="About-me__course">
          Analysis and Systems Development, FECAF
        </h6>
        <p className="About-me__date">FEB 2019 - MAY 2021 / São Paulo</p>
        <p className="About-me__myself About-me__myself--course">
          In addition to the traditional learning and college subjects, we
          simulate the creation of startups and work on the development of the
          invented product, from planning to practice using Front and Back end
          technologies.
        </p>
        <a
          href="https://pdfhost.io/0ad5c657-36ac-4752-a8a2-91d1a646a2cb"
          download
        >
          <BlueButton className="About-me__button">Download resume</BlueButton>
        </a>
      </div>
      <img
        className="About-me__img"
        alt="gameboy illustration"
        src={require('assets/gameboy.svg')}
      />
    </div>
  );
};
export default AboutMe;
