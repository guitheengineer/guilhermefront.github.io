import { Companies, Projects, Stack } from 'types';
import { WorkImage } from './WorkImage';
import { Icon } from 'components';
import Link from 'next/link';
import styles from './work.module.scss';
import classNames from 'classnames';

type WorkProps = {
  title: Projects;
  company: Companies;
  role: string | string[];
  image: 'first';
  stack: Stack;
};

export const Work = ({ title, company, role, stack }: WorkProps) => {
  const lowerCaseTitle = title.toLowerCase().replace(/ /g, '-') as Projects;
  return (
    <Link prefetch={false} href={`/projects/${lowerCaseTitle}`}>
      <a
        type="button"
        className="flex p-5 rounded-md cursor-pointer bg-white shadow-[0_50px_30px_rgba(0,59,108,0.06)]"
      >
        <div className="flex-shrink-0">
          <h4 className="font-medium text-xs font-poppins text-suave-blue capitalize">
            {company}
          </h4>
          <h3 className="font-medium font-poppins mt-5 capitalize max-w-[140px]">
            {title}
          </h3>
          <p className="text-sm capitalize mt-3 text-suave-lighter font-poppins">
            {Array.isArray(role)
              ? role.map((value) => <p key={value}>{value}</p>)
              : role}
          </p>
          <ul
            className={classNames(
              'mt-6 grid gap-4 grid-rows-3 grid-cols-3',
              styles.stack
            )}
          >
            {stack.map((tech) => (
              <Icon
                type="work"
                title={tech}
                key={tech}
                imgSize={15}
                size={28}
              />
            ))}
          </ul>
        </div>
        <WorkImage image={lowerCaseTitle} />
      </a>
    </Link>
  );
};
