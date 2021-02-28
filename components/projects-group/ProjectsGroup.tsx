import { Work } from 'components';
import { Heading } from 'components';
import Projects from 'projects';
import styles from './projects-group.module.scss';

type Props = {
  quantity?: number;
};

export const ProjectList = ({ quantity }: Props) => (
  <div className={styles['projects-group__works']}>
    {Projects.slice(0, quantity ? quantity : Projects.length).map((project) => (
      <Work key={project.title} {...project} />
    ))}
  </div>
);

const ProjectsGroup = () => {
  return (
    <article className={styles['projects-group']}>
      <Heading>Projects</Heading>
      <ProjectList quantity={6} />
    </article>
  );
};

export default ProjectsGroup;
