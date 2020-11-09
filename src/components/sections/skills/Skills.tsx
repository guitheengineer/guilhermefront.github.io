import { Heading } from 'components/heading';
import { Skill } from 'components/skill';
import React, { useState } from 'react';
import './skills.scss';
import chevronDown from 'assets/chevron-down.svg';

const Skills = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className="Skills">
      <Heading className="Skills__heading" title="Skills" />
      <Skill title="react" percentage={70} level="Intermediary" />
      <Skill title="html" percentage={73} level="Intermediary" />
      <Skill title="css" percentage={73} level="Intermediary" />
      <Skill title="typescript" percentage={55} level="Intermediary" />
      {seeMore ? (
        <>
          <Skill title="redux" percentage={73} level="Intermediary" />
          <Skill title="mongo" percentage={40} level="Basic" />
          <Skill title="node" percentage={40} level="Basic" />
          <Skill
            title="styled-components"
            percentage={65}
            level="Intermediary"
          />
          <Skill title="figma" percentage={75} level="Intermediary" />
        </>
      ) : null}

      <button
        type="button"
        className="Skills__see-more"
        onClick={() => setSeeMore((prevState) => !prevState)}
      >
        See more
        <img
          className="Skills__chevron-down"
          alt="chevron-down"
          style={{ transform: seeMore ? 'rotate(180deg)' : 'initial' }}
          src={chevronDown}
        />
      </button>
    </article>
  );
};

export default Skills;
