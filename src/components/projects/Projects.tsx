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
      <Work>
        <WorkInfo>
          <WorkCompany>Personal project</WorkCompany>
          <WorkTitle>BetterAim</WorkTitle>
          <WorkRoles>Front-end developer, UI/UX designer</WorkRoles>
          <WorkStack>
            <WorkIcon title="react" />
            <WorkIcon title="redux" />
            <WorkIcon
              imgStyle={{ width: '1.0rem', height: '1.4rem' }}
              title="figma"
            />
            <WorkIcon title="mongo" />
            <WorkIcon title="sass" />
            <WorkIcon imgStyle={{ width: '1.6rem' }} title="node" />
            <WorkIcon
              imgStyle={{ width: '1.3rem', height: '1.3rem' }}
              title="typescript"
            />
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
            <WorkIcon title="redux" />
            <WorkIcon
              imgStyle={{ width: '1.0rem', height: '1.4rem' }}
              title="figma"
            />
            <WorkIcon title="mongo" />
            <WorkIcon title="sass" />
            <WorkIcon imgStyle={{ width: '1.6rem' }} title="node" />
            <WorkIcon
              imgStyle={{ width: '1.3rem', height: '1.3rem' }}
              title="typescript"
            />
          </WorkStack>
        </WorkInfo>
        <WorkImage image="first" />
      </Work>
    </article>
  );
};
export default Projects;
