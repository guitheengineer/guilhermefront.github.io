import { Heading, SeeMore, Skill } from 'components';
import { useState } from 'react';
import styles from './skills.module.scss';

export const Skills = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className={styles.skills}>
      <Heading className={styles.skills__heading}>Skills</Heading>
      <Skill title="react" percentage={73} />
      <Skill title="nextjs" percentage={76} />
      <Skill title="typescript" percentage={55} />
      <Skill title="javascript" percentage={73} />
      <Skill title="bootstrap" percentage={85} />
      <Skill title="sass" percentage={78} />
      {seeMore && (
        <>
          <Skill title="html" percentage={83} />
          <Skill title="redux" percentage={63} />
          <Skill title="css" percentage={80} />
          <Skill title="storybook" percentage={75} />
          <Skill title="styled-components" percentage={80} />
          <Skill title="formik" percentage={70} />
          <Skill title="mongo" percentage={35} />
          <Skill title="node" percentage={40} />
          <Skill title="figma" percentage={70} />
        </>
      )}
      <SeeMore seeMore={seeMore} setSeeMore={setSeeMore} />
    </article>
  );
};
