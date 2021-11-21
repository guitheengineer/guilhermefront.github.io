import { useState, useCallback } from 'react';
import styles from './project.module.scss';
import { OtherProjects, ContactArea, Footer, Nav } from 'components';
import { useMediaQuery } from 'react-responsive';
import { Projects } from 'projects';
import { Projects as ProjectsType } from 'types';
import { ProjectIcons } from '../project-components';

type ProjectProps = {
  project: ProjectsType;
};

const ProjectContent = () => {
  return <ProjectIcons stack={['bootstrap']} />;
};

export const Project = ({ project }: ProjectProps) => {
  // const [seeMore, setSeeMore] = useState(false);

  // const is768 = useMediaQuery({ maxWidth: 768 });

  // const setMore = useCallback(() => {
  //   setSeeMore((prevState) => !prevState);
  // }, []);

  // const projectData = () => {
  //   return Projects.find((project) => project.title === 'quizby');
  // };

  return (
    <div>
      {/* <ProjectContent
        seeMore={seeMore}
        setSeeMore={setMore}
        is768={is768}
        img={`assets/work-demos/${project}.png`}
        projectData={projectData}
      /> */}
      <ContactArea />
      <OtherProjects />
    </div>
  );
};
