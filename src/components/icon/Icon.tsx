import { useEffect, useState } from 'react';
import './icon.scss';
import { Tech } from 'types';

export type IconProps = {
  title: Tech;
  className?: string;
  imgClassName?: string;
  size?: number;
};

const Icon = ({ title, className, imgClassName, size = 50 }: IconProps) => {
  const [currentImg, setCurrentImg] = useState('');
  useEffect(() => {
    import(`assets/skill-icons/${title}.svg`).then((img) =>
      setCurrentImg(img.default)
    );
  }, []);

  return (
    <div
      style={
        !className
          ? {
              width: `${size / 10}rem`,
              height: `${size / 10}rem`,
            }
          : undefined
      }
      className={`Icon ${className}`}
    >
      <img alt={title} src={currentImg} className={imgClassName} />
    </div>
  );
};

export default Icon;
