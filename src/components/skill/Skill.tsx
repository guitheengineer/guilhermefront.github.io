import React from 'react';
import './skill.scss';
import { Icon } from 'components/icon';
import { IconProps } from 'components/icon/Icon';

type Props = Pick<IconProps, 'title'> & {
  title: string;
  percentage: number;
  level: 'Advanced' | 'Intermediary' | 'Basic';
};

const Skill = ({ title, percentage, level }: Props) => (
  <div className="Skill">
    <Icon imgClassName="Skill__img" className="Skill__icon" title={title} />
    <div className="Skill__progress">
      <span className="Skill__value" style={{ width: `${percentage}%` }} />
      <p className="Skill__level">{level}</p>
    </div>
  </div>
);

export default Skill;
