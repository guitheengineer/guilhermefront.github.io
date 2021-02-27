import { useEffect, useState, useCallback } from 'react';
import './project.scss';
import { RouteComponentProps, useParams } from '@reach/router';
import { ContactArea } from 'components/contact-area';
import { OtherProjects } from 'components/other-projects';
import { Footer } from 'components/footer';
import { useMediaQuery } from 'react-responsive';
import Projects from 'projects';
import { ProjectContent } from 'types';
import { Quizby, BetterAim } from './project-components';
import { Nav } from 'components/nav';

const components = {
  quizby: Quizby,
  betteraim: BetterAim,
};

type Projects = { project: 'betteraim' };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Project = (_props: RouteComponentProps) => {
  const { project }: Projects = useParams();
  const [currentImg, setCurrentImg] = useState('');
  const [seeMore, setSeeMore] = useState(false);

  const is768 = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    import(`assets/work-demos/${project}.png`).then((img) =>
      setCurrentImg(img.default)
    );
  }, []);

  const setMore = useCallback(() => {
    setSeeMore((prevState) => !prevState);
  }, []);

  const ProjectContent = components[project];

  // grab data about the project by its title
  const projectData = (Object.values(Projects).find((value) =>
    value.title === project ? value : null
  ) as unknown) as ProjectContent;

  return (
    <div className="Project">
      <Nav />
      <ProjectContent
        seeMore={seeMore}
        setSeeMore={setMore}
        is768={is768}
        img={currentImg}
        projectData={projectData}
      />
      <ContactArea />
      <OtherProjects />
      <Footer />
    </div>
  );
};

export default Project;
