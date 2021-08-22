import { Heading, SeeMore, Skill } from 'components';
import { useState } from 'react';
import styles from './skills.module.scss';

export const Skills = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className={styles.skills}>
      <Heading className={styles.skills__heading}>Skills</Heading>
      <Skill title="react" percentage={73} />
      <Skill title="typescript" percentage={55} />
      <Skill title="redux" percentage={63} />
      <Skill title="css" percentage={78} />
      <Skill title="html" percentage={73} />
      {seeMore ? (
        <>
          <Skill title="mongo" percentage={35} />
          <Skill title="node" percentage={40} />
          <Skill title="styled-components" percentage={65} />
          <Skill title="figma" percentage={70} />
        </>
      ) : null}

      <SeeMore seeMore={seeMore} setSeeMore={setSeeMore} />
    </article>
  );
};
