import { Role, Stack, Screens, SeeMoreTypes } from 'types';
import { SeeMore, Icon } from 'components';
import styles from './project-components.module.scss';
import { Screen } from './screen';

export const ProjectIcons = ({ stack }: { stack: Stack }) => (
  <div className={styles.icons}>
    {stack.map((tech) => (
      <Icon
        type="work-icon"
        key={tech}
        title={tech}
        className={styles.icon}
        imgSize={19}
      />
    ))}
  </div>
);

export const ProjectRole = ({ role }: { role: Role }) => (
  <h4 className={styles.role}>
    {Array.isArray(role) ? role.reduce((acc, v) => acc + ', ' + v) : role}
  </h4>
);

export const ProjectSite = ({ site }: { site: string }) => (
  <a href={site} className={styles.link}>
    {site}
  </a>
);

export const ProjectScreens = ({
  screens,
  quantity,
  seeMore,
  setSeeMore,
}: SeeMoreTypes & {
  screens: Screens | undefined;
  quantity?: number;
}) => (
  <>
    <h2 className={styles['project__screen-title']}>Screens</h2>
    <ul data-testid="screens" className={styles.screens}>
      {screens
        ?.slice(0, quantity && seeMore ? quantity : screens.length)
        .map((screen) => (
          <Screen key={screen.title} {...screen} />
        ))}
    </ul>
    <SeeMore
      className={styles.seemore}
      setSeeMore={setSeeMore}
      seeMore={seeMore}
    />
  </>
);
