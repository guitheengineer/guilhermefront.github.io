import { Work } from 'components';
import { Heading } from 'components';
import { Projects } from 'projects';

type Props = {
  quantity?: number;
};

export const ProjectList = ({ quantity }: Props) => (
  <div className="grid lg:grid-cols-2 gap-8 mt-6">
    {Projects.slice(0, quantity ? quantity : Projects.length).map((project) => (
      <Work key={project.title} {...project} />
    ))}
  </div>
);

export const ProjectsGroup = () => {
  return (
    <article className="mt-24 md:mt-32">
      <Heading>Projects</Heading>
      <ProjectList quantity={6} />
    </article>
  );
};
