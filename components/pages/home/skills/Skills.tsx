import { Heading, SeeMore, Skill } from 'components';
import { useState } from 'react';

export const Skills = () => {
  const [seeMore, setSeeMore] = useState(false);
  return (
    <article className="mt-24 relative">
      <Heading className="mt-9">Skills</Heading>
      <Skill title="react" percentage={77} />
      <Skill title="nextjs" percentage={80} />
      <Skill title="typescript" percentage={55} />
      <Skill title="javascript" percentage={75} />
      <Skill title="bootstrap" percentage={88} />
      <Skill title="sass" percentage={78} />
      {seeMore && (
        <>
          <Skill title="html" percentage={83} />
          <Skill title="redux" percentage={63} />
          <Skill title="css" percentage={85} />
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
