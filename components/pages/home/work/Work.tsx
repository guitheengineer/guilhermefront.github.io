import { Projects, Companies, Stack } from 'types';
import { WorkImage } from './WorkImage';
import { Icon } from 'components';
import { Tech } from 'types';
import Link from 'next/link';
import styles from './work.module.scss';

type Props = {
  title: Projects;
  company: Companies;
  role: string | string[];
  image: 'first';
  stack: Stack;
};

const WorkIcon = ({ title }: { title: Tech }) => (
  <Icon type="work-icon" title={title} imgSize={15} size={28} />
);

export const Work = ({ title, company, role, image, stack }: Props) => {
  return (
    <Link href={`/projects/${title.toLowerCase()}`}>
      <a type="button" className={styles.work}>
        <div className={styles.work__info}>
          <h4 className={styles.work__company}>{company}</h4>
          <h3 className={styles.work__title}>{title}</h3>
          <p className={styles.work__roles}>
            {Array.isArray(role)
              ? role.reduce((acc, v) => acc + ', ' + v)
              : role}
          </p>
          <ul className={styles.work__stack}>
            {stack.map((tech) => (
              <WorkIcon key={tech} title={tech} />
            ))}
          </ul>
        </div>
        <WorkImage image={image} />
      </a>
    </Link>
  );
};
