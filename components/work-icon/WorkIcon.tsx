import { Icon } from 'components';
import { Tech } from 'types';

export const WorkIcon = ({ title }: { title: Tech }) => (
  <Icon type="work-icon" title={title} imgSize={15} size={28} />
);
