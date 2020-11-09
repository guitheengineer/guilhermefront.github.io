import { BlueButton } from 'components/blue-button';
import { Profile } from 'components/profile';
import React from 'react';
import './presentation.scss';
import handsOn from 'assets/hands-on.svg';

const Presentation = () => (
  <div className="Presentation">
    <section className="Presentation__call">
      <h1 className="Presentation__heading">
        <img
          className="Presentation__present-icon"
          alt="present-icon"
          src={handsOn}
        />
        Hi, i&apos;m Guilherme
      </h1>
      <p className="Presentation__paragraph">
        As a React developer, I&apos;ve been coding valuable applications with
        continuous improvements. My goal is to always improve people daily lives
        by providing quality software.
      </p>
      <a href="mailto:gsdevelopercontact@gmail.com">
        <BlueButton className="Presentation__button">Contact</BlueButton>
      </a>
    </section>
    <Profile />
  </div>
);
export default Presentation;
