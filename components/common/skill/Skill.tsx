import styles from './skill.module.scss';
import { Icon, IconProps } from '../icon';
import classNames from 'classnames';

type Props = Pick<IconProps, 'title'> & {
  title: string;
  percentage: number;
};

export const Skill = ({ title, percentage }: Props) => (
  <div title={title} className="flex mt-9 items-center relative">
    <Icon imgSize={20} type="skill" title={title} />
    <div className={classNames('relative rounded h-3', styles.progress)}>
      <span
        className={classNames('rounded block', styles.value)}
        style={{ width: `${percentage}%` }}
      />
      <p
        className={classNames(
          'absolute left-2/4 whitespace-nowrap -top-6 font-medium font-montserrat text-sm',
          styles.level
        )}
      >
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
