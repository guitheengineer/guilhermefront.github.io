import { Icon } from 'components';
import Image from 'next/image';
import { ProjectInfo } from 'types';

interface PresentationProps {
  project: ProjectInfo;
}

export const Presentation = ({ project }: PresentationProps) => (
  <article className="mt-14 flex justify-between">
    <div className="max-w-xs">
      <p className="font-montserrat text-suave-blue text-xs font-black">
        {Array.isArray(project.role)
          ? project.role.reduce((acc, v) => acc + ', ' + v)
          : project.role}
      </p>
      <h1 className="capitalize text-dark font-semibold text-3xl font-poppins mt-2">
        {project.title}
      </h1>
      <p className="font-montserrat text-sm font-medium text-suave-lighter mt-3">
        {project.description}
      </p>
      <a
        href={`https://${project.site}`}
        target="_blank"
        className="font-montserrat font-black text-suave-blue text-xs mt-5 block"
        rel="noreferrer"
      >
        🔗 {project.site}
      </a>
      <div className="mt-7 grid grid-cols-4 gap-5 w-max">
        {project.stack.map((tech) => (
          <Icon
            type="project"
            key={tech}
            title={tech}
            className="w-8"
            imgSize={19}
          />
        ))}
      </div>
    </div>
    <div className="w-full relative">
      <Image
        src={`/assets/work-demos/betteraim.png`}
        alt={`Demo of ${project.title}`}
        objectFit="contain"
        layout="fill"
      />
    </div>
  </article>
);
