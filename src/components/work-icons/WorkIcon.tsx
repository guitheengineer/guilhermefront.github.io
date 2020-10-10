import React from 'react';
import { Icon } from 'components/icon';
import { IconProps } from 'components/icon/Icon';
import './work-icon.scss';

const WorkIcon = ({
  title,
  imgStyle,
}: Pick<IconProps, 'title' | 'imgStyle'>) => {
  return (
    <Icon
      className="Work__icon"
      title={title}
      size={28}
      imgSize={18}
      imgStyle={imgStyle}
      backgroundColor="#FFFFFF"
    />
  );
};

export default WorkIcon;
