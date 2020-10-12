import React from 'react';
import './work.scss';

type Props = { image: 'first' };

const WorkImage = ({ image }: Props) => {
  return (
    <div className="Work__image">
      <img alt="work demo" src={require(`assets/work-images/${image}.svg`)} />
    </div>
  );
};

export default WorkImage;
