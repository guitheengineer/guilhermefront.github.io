import { Icon } from 'components/icon';
import './work-icon.scss';
import { Tech } from 'types';

const WorkIcon = ({ title }: { title: Tech }) => (
  <Icon
    className={`Work__icon Work__icon--${title}`}
    imgClassName={`Work__icon-img Work__icon-img--${title}`}
    title={title}
    size={28}
  />
);

export default WorkIcon;
