import { ContactArea, OtherProjects } from 'components';
import Head from 'next/head';
import { Presentation } from './presentation';
import { Content } from './content';
import { ProjectInfo } from 'types';

const capitalize = (str: string) =>
  str.replace(/(^\w)|(\s+\w)/g, (letter) => letter.toUpperCase());

interface ProjectProps {
  project: ProjectInfo;
}

export const Project = ({ project }: ProjectProps) => {
  return (
    <>
      <Head>
        <title>
          {capitalize(project.title)} - Project from Guilherme Samuel
        </title>
        <meta name="description" content={project.description} />
      </Head>
      <Presentation project={project} />
      <Content screens={project.screens} type="story">
        {project.description}
      </Content>
      <ContactArea />
      <OtherProjects excludeProject={project.title} />
    </>
  );
};
