import { Work } from 'components';
import { Heading } from 'components';
import { Projects } from 'projects';
import type { Projects as IProjects } from 'types';

export type ProjectsSectionProps = {
  quantity?: number;
  excludeProject?: IProjects | IProjects[];
};

export const ProjectList = ({
  quantity,
  excludeProject,
}: ProjectsSectionProps) => (
  <div className="grid lg:grid-cols-2 gap-8 mt-6">
    {Projects.slice(0, quantity || Projects.length)
      .filter(({ title }) => {
        if (Array.isArray(excludeProject)) {
          return !excludeProject.includes(title);
        }
        return !(title === excludeProject);
      })
      .map((project) => (
        <Work key={project.title} {...project} />
      ))}
  </div>
);

export const ProjectsSection = () => (
  <article className="mt-24 md:mt-32">
    <Heading>Projects</Heading>
    <ProjectList quantity={6} />
  </article>
);
