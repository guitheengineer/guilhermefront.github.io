import { ProjectList } from 'components/pages/home/projects-section/ProjectsSection';
import { Heading } from 'components';

export const OtherProjects = () => {
  return (
    <div className="mt-16 mb-32">
      <Heading className="mt-16">Other projects</Heading>
      <ProjectList quantity={4} />
    </div>
  );
};
