import styles from './other-projects.module.scss';
import { ProjectList } from 'components/pages/home/projects-group/ProjectsGroup';

export const OtherProjects = () => {
  return (
    <div className="mt-16 mb-32">
      <h2 className="mt-16">Other projects</h2>
      <ProjectList quantity={4} />
    </div>
  );
};
