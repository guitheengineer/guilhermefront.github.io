import React from 'react';
import './projects.scss';
import Work from '../work/Work';
import WorkTitle from 'components/work/WorkTitle';
import WorkInfo from 'components/work/WorkInfo';
import WorkCompany from 'components/work/WorkCompany';
import WorkRoles from 'components/work/WorkRoles';
import WorkStack from 'components/work/WorkStack';
import { WorkIcon } from 'components/work-icons';
import WorkImage from 'components/work/WorkImage';

const Projects = ({}) => {
  return (
    <article className="Projects">
      <h6 className="Projects__heading">Projects</h6>
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
