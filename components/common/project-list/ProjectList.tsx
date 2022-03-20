import { Projects } from 'projects';
import type { ProjectKeys } from 'types';
import Link from 'next/link';
import { Icon } from '../icon';
import Image from 'next/image';

type ProjectListProps = {
  quantity?: number;
  excludeProject?: ProjectKeys | ProjectKeys[];
};

export const ProjectList = ({ quantity, excludeProject }: ProjectListProps) => (
  <div className="grid lg:grid-cols-2 gap-8 mt-6">
    {Projects.slice(0, quantity || Projects.length)
      .filter(({ title }) => {
        if (Array.isArray(excludeProject)) {
          return !excludeProject.includes(title);
        }
        return !(title === excludeProject);
      })
      .map(({ title, company, stack, description, site }) => {
        const lowerCaseTitle = title
          .toLowerCase()
          .replace(/ /g, '-') as ProjectKeys;
        return (
          <Link prefetch={false} href={site}>
            <a
              type="button"
              className="relative flex p-5 2xl:p-7 rounded-md cursor-pointer bg-white shadow-[0_50px_30px_rgba(0,59,108,0.06)]"
            >
              <div className="md:w-9/12">
                <p className="font-medium text-xs font-poppins text-suave-blue capitalize">
                  {company}
                </p>
                <p className="font-medium font-poppins mt-5 capitalize max-w-[140px]">
                  {title}
                </p>
                <p className="w-full text-sm mt-3 text-suave-lighter font-poppins">
                  {description}
                </p>
                <ul className="mt-6 grid gap-4 grid-rows-3 grid-cols-3 w-fit">
                  {stack.map((tech) => (
                    <Icon
                      type="work"
                      title={tech}
                      key={tech}
                      imgSize={15}
                      size={28}
                    />
                  ))}
                </ul>
              </div>
              <div className="w-full h-full p-6 absolute right-0 top-0 opacity-[0.02] md:relative md:opacity-100">
                <div className="overflow-hidden relative mx-auto w-full h-full">
                  <Image
                    alt="work demo"
                    layout="fill"
                    objectFit="contain"
                    quality={90}
                    src={`/assets/home/project-demos/${lowerCaseTitle}.png`}
                  />
                </div>
              </div>
            </a>
          </Link>
        );
      })}
  </div>
);
