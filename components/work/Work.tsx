import { Projects, Companies, Stack } from 'types';
import WorkImage from './WorkImage';
import { WorkIcon } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import styles from './work.module.scss';

type Props = {
  title: Projects;
  company: Companies;
  role: string | string[];
  image: 'first';
  stack: Stack;
};

const Work = ({ title, company, role, image, stack }: Props) => {
  const {
    query: { project },
  } = useRouter();
  // console.log(project);
  return project !== title.toLowerCase() ? (
    <Link href={`/projects/${project}`}>
      <button type="button" className={styles.work}>
        <div className={styles.work__info}>
          <h4 className={styles.work__company}>{company}</h4>
          <h3 className={styles.work__title}>{title}</h3>
          <p className={styles.work__roles}>
            {Array.isArray(role)
              ? role.reduce((acc, v) => acc + ', ' + v)
              : role}
          </p>
          <ul className={styles.work__stack}>
            {stack.map((tech, i) => (
              <WorkIcon key={i} title={tech} />
            ))}
          </ul>
        </div>
        <WorkImage image={image} />
      </button>
    </Link>
  ) : null;
};

export default Work;
