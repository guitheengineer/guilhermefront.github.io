import { useEffect, useState } from 'react';
import './screen.scss';

type Props = {
  title: string;
  description: string;
};

const Screen = ({ title, description }: Props) => {
  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    import(`assets/screens/${title.toLowerCase()}.png`).then((img) =>
      setCurrentImg(img.default)
    );
  }, []);

  return (
    <li className="Screens__item">
      <h3 className="Screens__title">{title}</h3>
      <img className="Screens__img" src={currentImg} />
      <p className="Screens__paragraph">{description}</p>
    </li>
  );
};

export default Screen;
