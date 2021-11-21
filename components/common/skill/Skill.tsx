import styles from './skill.module.scss';
import { Icon, IconProps } from '../icon';

type Props = Pick<IconProps, 'title'> & {
  title: string;
  percentage: number;
};

export const Skill = ({ title, percentage }: Props) => (
  <div title={title} className={styles.skill}>
    <Icon imgSize={20} type="skill" title={title} />
    <div className={styles.skill__progress}>
      <span
        className={styles.skill__value}
        style={{ width: `${percentage}%` }}
      />
      <p className={styles.skill__level}>
        {percentage < 40
          ? 'Basic'
          : percentage < 65
          ? 'Intermediary'
          : percentage < 80
          ? 'Intermediary to advanced'
          : 'Advanced'}
      </p>
    </div>
  </div>
);