import React from 'react';
import './projects.scss';
import {
  Work,
  WorkCompany,
  WorkImage,
  WorkInfo,
  WorkRoles,
  WorkStack,
  WorkTitle,
} from 'components/work';
import { WorkIcon } from 'components/work-icon';
import { Heading } from 'components/heading';

const Projects = () => {
  return (
    <article className="Projects">
      <Heading title="Projects" />
      <div className="Projects__works">
        <Work>
          <WorkInfo>
            <WorkCompany>Personal project</WorkCompany>
            <WorkTitle>Quizby</WorkTitle>
            <WorkRoles>Fullstack developer, UI/UX designer</WorkRoles>
            <WorkStack>
              <WorkIcon title="react" />
              <WorkIcon title="redux" />
              <WorkIcon title="figma" />
              <WorkIcon title="mongo" />
              <WorkIcon title="sass" />
              <WorkIcon title="node" />
              <WorkIcon title="typescript" />
            </WorkStack>
          </WorkInfo>
          <WorkImage image="first" />
        </Work>
        <Work>
          <WorkInfo>
            <WorkCompany>Personal project</WorkCompany>
            <WorkTitle>BetterAim</WorkTitle>
            <WorkRoles>Front-end developer, UI/UX designer</WorkRoles>
            <WorkStack>
              <WorkIcon title="react" />
              <WorkIcon title="figma" />
              <WorkIcon title="sass" />
              <WorkIcon title="typescript" />
            </WorkStack>
          </WorkInfo>
          <WorkImage image="first" />
        </Work>
        <Work>
          <WorkInfo>
            <WorkCompany>MICG</WorkCompany>
            <WorkTitle>Budget estimator</WorkTitle>
            <WorkRoles>React Developer, UI/UX designer</WorkRoles>
            <WorkStack>
              <WorkIcon title="react" />
              <WorkIcon title="figma" />
              <WorkIcon title="styled-components" />
            </WorkStack>
          </WorkInfo>
          <WorkImage image="first" />
        </Work>
        <Work>
          <WorkInfo>
            <WorkCompany>Personal project</WorkCompany>
            <WorkTitle>Twitter Trending</WorkTitle>
            <WorkRoles>Front-end developer, UI/UX designer</WorkRoles>
            <WorkStack>
              <WorkIcon title="react" />
              <WorkIcon title="figma" />
            </WorkStack>
          </WorkInfo>
          <WorkImage image="first" />
        </Work>
        <Work>
          <WorkInfo>
            <WorkCompany>Personal project</WorkCompany>
            <WorkTitle>Donut</WorkTitle>
            <WorkRoles>React Developer</WorkRoles>
            <WorkStack>
              <WorkIcon title="react" />
              <WorkIcon title="typescript" />
            </WorkStack>
          </WorkInfo>
          <WorkImage image="first" />
        </Work>
      </div>
    </article>
  );
};
export default Projects;
