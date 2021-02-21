import React from 'react';
import './projects-group.scss';
import { Work } from 'components/work';
import { Heading } from 'components/heading';
import Projects from 'projects';

type Props = {
  quantity?: number;
};

export const ProjectList = ({ quantity }: Props) => (
  <div className="Projects-group__works">
    {Projects.slice(0, quantity ? quantity : Projects.length).map((project) => (
      <Work key={project.title} {...project} />
    ))}
  </div>
);

const ProjectsGroup = () => (
  <article className="Projects-group">
    <Heading>Projects</Heading>
    <ProjectList />
  </article>
);
export default ProjectsGroup;
