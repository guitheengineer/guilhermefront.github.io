import { PersonalIcon } from 'components/personal-icon';
import './nav.scss';
import { Link } from '@reach/router';

const Nav = ({ className }: { className?: string }) => (
  <nav className={`Nav Nav--${className}`}>
    <Link to="/">
      <h4 className="Nav__title">Guilherme Samuel</h4>
    </Link>
    <ul className="Nav__list">
      <PersonalIcon className="Nav__item Nav__item--github" title="github" />
      <PersonalIcon
        className="Nav__item Nav__item--linkedin"
        title="linkedin"
      />
    </ul>
  </nav>
);

export default Nav;
