import {
  ProjectList,
  ProjectsSectionProps,
} from 'components/pages/home/projects-section/ProjectsSection';
import { Heading } from 'components';

export const OtherProjects = ({
  excludeProject,
}: Pick<ProjectsSectionProps, 'excludeProject'>) => {
  return (
    <div className="mt-16 mb-32">
      <Heading className="mt-16">Other projects</Heading>
      <ProjectList excludeProject={excludeProject} quantity={4} />
    </div>
  );
};
