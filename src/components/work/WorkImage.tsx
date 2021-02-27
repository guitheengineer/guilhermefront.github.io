import { useState, useEffect } from 'react';
import './work.scss';

type ImageProps = { image: 'first' };

const WorkImage = ({ image }: ImageProps) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    import(`assets/work-images/${image}.png`).then((img) =>
      setCurrentImg(img.default)
    );
  }, []);

  return (
    <div className="Work__image">
      <img alt="work demo" src={currentImg} />
    </div>
  );
};

export default WorkImage;
