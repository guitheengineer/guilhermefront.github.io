import { Role, Stack, Screens } from '../../../types/types';
import { Icon } from 'components/icon';
import Screen from '../Screen';
import { SeeMore } from 'components/see-more';

export const ProjectIcons = ({ stack }: { stack: Stack }) => (
  <div className="Project__icons">
    {stack.map((tech) => (
      <Icon
        key={tech}
        title={tech}
        className="Project__icon"
        imgClassName="Project__icon-img"
      />
    ))}
  </div>
);

export const ProjectRole = ({ role }: { role: Role }) => (
  <h4 className="Project__role">
    {Array.isArray(role) ? role.reduce((acc, v) => acc + ', ' + v) : role}
  </h4>
);

export const ProjectSite = ({ site }: { site: string }) => (
  <a href={site} className="Project__link">
    {site}
  </a>
);

export const ProjectScreens = ({
  screens,
  quantity,
  seeMore,
  setSeeMore,
}: {
  screens: Screens | undefined;
  quantity?: number;
  seeMore: boolean;
  setSeeMore: (value: React.SetStateAction<boolean>) => void;
}) => (
  <>
    <h2 className="Content__title Content__title--screens">Screens</h2>
    <ul data-testid="screens" className="Screens">
      {screens
        ?.slice(0, quantity && seeMore ? quantity : screens.length)
        .map((screen) => (
          <Screen key={screen.title} {...screen} />
        ))}
    </ul>
    <SeeMore
      className="Project__seemore"
      setSeeMore={setSeeMore}
      seeMore={seeMore}
    />
  </>
);
