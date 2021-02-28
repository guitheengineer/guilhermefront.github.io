import { Icon } from 'components';
import styles from './profile.module.scss';

const Profile = () => (
  <aside className={styles.profile}>
    <div className={styles.profile__info}>
      <img
        alt="profile"
        src={'/assets/profile-picture.png'}
        className={styles.profile__picture}
      />
      <div className={styles.profile__job}>Front end Developer</div>
    </div>
    <div className={styles.profile['other-info']}>
      <h3 className={styles.profile__name}>Guilherme Samuel</h3>
      <p className={styles.profile__location}>São Paulo - Brazil</p>
    </div>
    <ul className={styles.profile__icons}>
      <Icon type="profile" imgSize={24} title="react" />
      <Icon type="profile" title="redux" />
      <Icon type="profile" imgSize={22} title="typescript" />
      <Icon type="profile" imgSize={27} title="mongo" />
      <Icon type="profile" imgSize={22} title="html" />
      <Icon type="profile" imgSize={26} title="sass" />
      <Icon type="profile" title="node" />
      <Icon type="profile" imgSize={22} title="css" />
    </ul>
  </aside>
);

export default Profile;
