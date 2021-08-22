import { useEffect, useState, useCallback } from 'react';
import styles from './project.module.scss';
import {
  OtherProjects,
  ContactArea,
  Footer,
  Nav,
  Quizby,
  BetterAim,
} from 'components';
import { useMediaQuery } from 'react-responsive';
import { Projects } from 'projects';
import { ProjectContent } from 'types';
import { useRouter } from 'next/dist/client/router';

const components = {
  quizby: Quizby,
  betteraim: BetterAim,
};

type Projects = { project: 'betteraim' };

export const Project = () => {
  const {
    query: { project },
  } = useRouter();
  const [seeMore, setSeeMore] = useState(false);

  const is768 = useMediaQuery({ maxWidth: 768 });

  const setMore = useCallback(() => {
    setSeeMore((prevState) => !prevState);
  }, []);

  const ProjectContent = components[project];

  // grab data about the project by its title
  const projectData = Object.values(Projects).find((value) =>
    value.title === project ? value : null
  ) as unknown as ProjectContent;

  return (
    <div className={styles.project}>
      <Nav />
      <ProjectContent
        seeMore={seeMore}
        setSeeMore={setMore}
        is768={is768}
        img={`assets/work-demos/${project}.png`}
        projectData={projectData}
      />
      <ContactArea />
      <OtherProjects />
      <Footer />
    </div>
  );
};
