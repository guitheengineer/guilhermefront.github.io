import { Role as IRole, Stack, Screens as IScreens, SeeMoreTypes } from 'types';
import { SeeMore, Icon } from 'components';
import styles from './project-components.module.scss';
import { Screen } from './screen';
import classNames from 'classnames';

export const Icons = ({
  stack,
  imgSize = 19,
}: {
  stack: Stack;
  imgSize?: number;
}) => (
  <div className="mt-7 grid grid-cols-4 gap-5 w-max">
    {stack.map((tech) => (
      <Icon
        type="project"
        key={tech}
        title={tech}
        className="w-8"
        imgSize={imgSize}
      />
    ))}
  </div>
);

export const Role = ({ role }: { role: IRole }) => (
  <h4 className={styles.role}>
    {Array.isArray(role) ? role.reduce((acc, v) => acc + ', ' + v) : role}
  </h4>
);

export const Site = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    className="font-montserrat font-black text-suave-blue text-xs mt-5 block"
    rel="noreferrer"
  >
    🔗 {href}
  </a>
);

export const Screens = ({
  screens,
  quantity,
  seeMore,
  setSeeMore,
}: SeeMoreTypes & {
  screens: IScreens | undefined;
  quantity?: number;
}) => (
  <>
    <h2
      className={classNames(
        'text-dark capitalize font-poppins font-semibold text-3xl mt-2',
        styles.title
      )}
    >
      Screens
    </h2>
    <ul
      data-testid="screens"
      className="flex justify-between flex-wrap relative pb-12"
    >
      {screens
        ?.slice(0, quantity && seeMore ? quantity : screens.length)
        .map((screen) => (
          <Screen key={screen.title} {...screen} />
        ))}
    </ul>
    <SeeMore
      className="flex absolute right-3 cursor-pointer bottom-0 items-center mt-2"
      setSeeMore={setSeeMore}
      seeMore={seeMore}
    />
  </>
);
