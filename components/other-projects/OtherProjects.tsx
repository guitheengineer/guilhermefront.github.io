import styles from './other-projects.module.scss';
import { ProjectList } from 'components/projects-group/ProjectsGroup';

const OtherProjects = () => {
  return (
    <div className={styles['other-projects']}>
      <h2 className={styles['content__title']}>Other projects</h2>
      <ProjectList quantity={4} />
    </div>
  );
};

export default OtherProjects;
