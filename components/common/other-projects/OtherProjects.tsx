import styles from './other-projects.module.scss';
import { ProjectList } from 'components/pages/home/projects-group/ProjectsGroup';

export const OtherProjects = () => {
  return (
    <div className={styles['other-projects']}>
      <h2 className={styles['content__title']}>Other projects</h2>
      <ProjectList quantity={4} />
    </div>
  );
};
