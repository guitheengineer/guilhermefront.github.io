import { BlueButton } from 'components/blue-button';
import { Profile } from 'components/profile';
import React from 'react';
import './presentation.scss';

const Presentation = ({}) => {
  return (
    <div className="Presentation">
      <section className="Presentation__call">
        <h1 className="Presentation__heading">&#128075; Hi, i'm Guilherme</h1>
        <p className="Presentation__paragraph">
          As a React developer, I've been coding valuable applications with
          continuous improvements. My goal is to always improve people daily
          lives by providing quality software
        </p>
        <a href="mailto:gsdevelopercontact@gmail.com">
          <BlueButton className="Presentation__button">Contact</BlueButton>
        </a>
      </section>
      <Profile />
    </div>
  );
};
export default Presentation;
