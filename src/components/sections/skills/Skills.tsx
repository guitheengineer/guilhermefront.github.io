import { Heading } from 'components/heading';
import { Skill } from 'components/skill';
import { useState } from 'react';
import './skills.scss';
import chevronDown from 'assets/chevron-down.svg';

const Skills = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className="Skills">
      <Heading className="Skills__heading">Skills</Heading>
      <Skill title="react" percentage={73} level="Intermediary to advanced" />
      <Skill title="typescript" percentage={55} level="Intermediary" />
      <Skill title="redux" percentage={63} level="Intermediary" />
      <Skill title="css" percentage={78} level="Intermediary to advanced" />
      <Skill title="html" percentage={73} level="Intermediary to advanced" />
      {seeMore ? (
        <>
          <Skill title="mongo" percentage={35} level="Basic" />
          <Skill title="node" percentage={40} level="Basic" />
          <Skill
            title="styled-components"
            percentage={65}
            level="Intermediary"
          />
          <Skill title="figma" percentage={70} level="Intermediary" />
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
