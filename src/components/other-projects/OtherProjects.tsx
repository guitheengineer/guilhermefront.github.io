import React from 'react';
import './other-projects.scss';
import {
  Work,
  WorkInfo,
  WorkCompany,
  WorkTitle,
  WorkRoles,
  WorkStack,
  WorkImage,
} from 'components/work';
import { WorkIcon } from 'components/work-icon';

const OtherProjects = () => {
  return (
    <div className="Other-projects">
      <h2 className="Content__title">Other projects</h2>
      <div className="Projects-group__works">
        <Work title="Quizby">
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
        <Work title="BetterAim">
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
        <Work title="Budget estimator">
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
        <Work title="Budget estimator">
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
        <Work title="Donut">
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
    </div>
  );
};

export default OtherProjects;
