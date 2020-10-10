import React from 'react';
import { PersonalIcon } from 'components/personal-icon';
import './nav.scss';

const Nav = () => (
  <nav className="Nav">
    <h4 className="Nav__title">Guilherme Samuel</h4>
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
