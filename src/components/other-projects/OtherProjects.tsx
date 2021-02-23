import './other-projects.scss';
import { ProjectList } from 'components/sections/projects-group/ProjectsGroup';

const OtherProjects = () => {
  return (
    <div className="Other-projects">
      <h2 className="Content__title">Other projects</h2>
      <ProjectList />
    </div>
  );
};

export default OtherProjects;
