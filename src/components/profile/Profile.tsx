import { Icon } from 'components/icon';
import React from 'react';
import './profile.scss';
import profilePicture from 'assets/profile-picture.png';

const Profile = () => (
  <aside className="Profile">
    <div className="Profile__info">
      <img alt="profile" src={profilePicture} className="Profile__picture" />
      <div className="Profile__job">Front-end Developer</div>
    </div>
    <div className="Profile__other-info">
      <h3 className="Profile__name">Guilherme Samuel</h3>
      <p className="Profile__location">São Paulo</p>
    </div>
    <ul className="Profile__icons">
      <Icon className="Profile__icon Profile__icon--react" title="react" />
      <Icon className="Profile__icon Profile__icon--redux" title="redux" />
      <Icon
        className="Profile__icon Profile__icon--typescript"
        title="typescript"
      />
      <Icon className="Profile__icon Profile__icon--mongo" title="mongo" />
      <Icon className="Profile__icon Profile__icon--html" title="html" />
      <Icon className="Profile__icon Profile__icon--sass" title="sass" />
      <Icon className="Profile__icon Profile__icon--node" title="node" />
      <Icon className="Profile__icon Profile__icon--css" title="css" />
    </ul>
  </aside>
);

export default Profile;
