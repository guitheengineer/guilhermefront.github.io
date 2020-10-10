import React from 'react';
import { Icon } from 'components/icon';
import { IconProps } from 'components/icon/Icon';
import './work-icon.scss';

const WorkIcon = ({ title }: Pick<IconProps, 'title'>) => {
  return (
    <Icon
      className={`Work__icon Work__icon--${title}`}
      imgClassName={`Work__icon-img Work__icon-img--${title}`}
      title={title}
      size={28}
      backgroundColor="#FFFFFF"
    />
  );
};

export default WorkIcon;
