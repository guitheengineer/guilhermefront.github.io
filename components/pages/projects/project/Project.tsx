import { useState, useCallback } from 'react';
import styles from './project.module.scss';
import { OtherProjects, ContactArea, Footer, Nav } from 'components';
import { useMediaQuery } from 'react-responsive';
import { ProjectContent as IProjectContent } from 'types';
import { ProjectIcons, ProjectRole } from '../project-components';

type ProjectProps = {
  project: IProjectContent;
};

const ProjectContent = () => {
  return (
    <>
      <ProjectRole role="Fullstack developer" />
      <ProjectIcons stack={['bootstrap']} />
    </>
  );
};

export const Project = ({ project }: ProjectProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const is768 = useMediaQuery({ maxWidth: 768 });

  const setMore = useCallback(() => {
    setSeeMore((prevState) => !prevState);
  }, []);

  return (
    <div>
      <ProjectContent img={`assets/work-demos/${project.title}.png`} />
      <ContactArea />
      <OtherProjects />
    </div>
  );
};
