import React, { useEffect, useState } from 'react';
import './project.scss';
import { RouteComponentProps, useParams } from '@reach/router';
import { BetterAim } from './project-pages';
import { ContactArea } from 'components/contact-area';
import { OtherProjects } from 'components/other-projects';
import { Footer } from 'components/footer';

const components = {
  betteraim: BetterAim,
};

type Projects = { project: 'betteraim' };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Project = (_props: RouteComponentProps) => {
  const { project }: Projects = useParams();

  const [currentImg, setCurrentImg] = useState('');

  useEffect(() => {
    const requireImage = async () => {
      const img = await import(`assets/work-demos/${project}.png`);
      setCurrentImg(img.default);
    };
    requireImage();
  }, []);

  const ProjectContent = components[project];
  return (
    <div className="Project">
      <ProjectContent img={currentImg} />
      <ContactArea />
      <OtherProjects />
      <Footer />
    </div>
  );
};

export default Project;
