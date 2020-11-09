import React from 'react';
import './work.scss';

const workImages = require.context(
  'assets/work-images',
  false,
  /\.(png|jpe?g|svg)$/
);

type Props = { image: 'first' };

const WorkImage = ({ image }: Props) => (
  <div className="Work__image">
    <img alt="work demo" src={workImages(`./${image}.png`).default} />
  </div>
);

export default WorkImage;
