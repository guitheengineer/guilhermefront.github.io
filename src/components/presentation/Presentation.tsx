import { BlueButton } from 'components/blue-button';
import React from 'react';
import './presentation.scss';

const Presentation = ({}) => {
  return (
    <section className="Presentation">
      <h1 className="Presentation__heading">&#128075; Hi, i'm Guilherme</h1>
      <p className="Presentation__paragraph">
        As a React developer, I've been coding valuable applications with
        continuous improvements. My goal is to always improve people daily lives
        by providing quality software
      </p>
      <BlueButton className="Presentation__button">Contact</BlueButton>
    </section>
  );
};
export default Presentation;
