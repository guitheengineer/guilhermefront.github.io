import React, { useEffect, useState, ReactNode } from 'react';
import './screen.scss';

type Props = {
  name: string;
  children: ReactNode;
};

const Screen = ({ name, children }: Props) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    const importImage = async () => {
      const img = await import(`assets/screens/${name.toLowerCase()}.png`);
      setCurrentImg(img.default);
    };
    importImage();
  }, []);

  return (
    <li className="Screens__item">
      <h3 className="Screens__title">{name}</h3>
      <img className="Screens__img" src={currentImg} />
      <p className="Screens__paragraph">{children}</p>
    </li>
  );
};

export default Screen;
