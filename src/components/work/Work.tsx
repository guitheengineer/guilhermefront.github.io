import './work.scss';
import { navigate, useParams } from '@reach/router';
import { Projects, Companies, Stack } from 'types';
import WorkImage from './WorkImage';
import { WorkIcon } from 'components/work-icon';

type Props = {
  title: Projects;
  company: Companies;
  role: string | string[];
  image: 'first';
  stack: Stack;
};

const Work = ({ title, company, role, image, stack }: Props) => {
  const { project } = useParams();

  return project !== title.toLowerCase() ? (
    <button
      onClick={() => navigate(`/projects/${title.toLowerCase()}`)}
      type="button"
      className="Work"
    >
      <div className="Work__info">
        <h4 className="Work__company">{company}</h4>
        <h3 className="Work__title">{title}</h3>
        <p className="Work__roles">
          {Array.isArray(role) ? role.reduce((acc, v) => acc + ', ' + v) : role}
        </p>
        <ul className="Work__stack">
          {stack.map((tech, i) => (
            <WorkIcon key={i} title={tech} />
          ))}
        </ul>
      </div>
      <WorkImage image={image} />
    </button>
  ) : null;
};

export default Work;
