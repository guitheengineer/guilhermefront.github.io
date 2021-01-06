import React, { useState, useEffect } from 'react';
import './work.scss';

type Props = { image: 'first' };

const WorkImage = ({ image }: Props) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    const requireImage = async () => {
      const img = await import(`assets/work-images/${image}.png`);
      setCurrentImg(img.default);
    };
    requireImage();
  }, []);

  return (
    <div className="Work__image">
      <img alt="work demo" src={currentImg} />
    </div>
  );
};

export default WorkImage;
