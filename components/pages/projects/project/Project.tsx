import { OtherProjects, ContactArea } from 'components';
import { ProjectContent as IProjectContent } from 'types';
import * as ProjectComponents from '../project-components';
import NextImage from 'next/image';

type ProjectProps = {
  project: IProjectContent;
};

type ImageProps = {
  src: string;
  alt?: string;
};

const Image = ({ src, alt }: ImageProps) => (
  <NextImage src={src} layout="fill" alt={alt} />
);

const ProjectContent = ({ project }: ProjectProps) => {
  return (
    <article className="mt-14">
      <div className="max-w-xs">
        <ProjectComponents.Role role="Fullstack developer" />
        <h1 className="text-dark font-semibold text-3xl font-poppins mt-2">
          Quizby
        </h1>
        <p className="font-montserrat text-sm font-medium text-suave-lighter mt-3">
          Developed and designed from scratch, quizby is a fun quiz app with
          CRUD operations.
        </p>
        <ProjectComponents.Site href="quizby.herokuapp.com" />
        <ProjectComponents.Icons
          imgSize={18}
          stack={[
            'react',
            'redux',
            'typescript',
            'node',
            'sass',
            'mongo',
            'figma',
          ]}
        />
      </div>
      <div className="w-2/4 relative">
        <Image
          src={`/assets/work-demos/${project.title.replace(/ /g, '-')}.png`}
          alt={`Demo of ${project.title}`}
        />
      </div>
    </article>
  );
};

export const Project = ({ project }: ProjectProps) => {
  return (
    <div>
      <ProjectContent project={project} />
      <ContactArea />
      <OtherProjects />
    </div>
  );
};
