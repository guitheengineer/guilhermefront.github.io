import { Icon, IconProps } from '../icon';

type Props = Pick<IconProps, 'title'> & {
  title: string;
  percentage: number;
};

export const Skill = ({ title, percentage }: Props) => (
  <div title={title} className="flex mt-9 items-center relative">
    <Icon className="flex-shrink-0" imgSize={20} type="skill" title={title} />

    <div className="flex flex-col ml-6 relative w-full -mt-7">
      <p className="whitespace-nowrap -top-6 font-medium font-montserrat text-sm text-center mb-2">
        {percentage < 40
          ? 'Basic'
          : percentage < 65
          ? 'Intermediary'
          : percentage < 80
          ? 'Intermediary to advanced'
          : 'Advanced'}
      </p>
      <div className="rounded h-3 shadow-[0_5px_19px_rgba(0,0,0,0.08)] w-[calc(100%_-_10px)] lg:[calc(100%_-_25px)]">
        <span
          className="rounded block h-3 bg-[#10daff] flex-shrink-0"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  </div>
);
