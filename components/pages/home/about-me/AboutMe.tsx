import classNames from 'classnames';
import { Heading } from 'components';
import Image from 'next/image';
import { ReactNode } from 'react';

interface TextContentProps {
  children: ReactNode;
  className?: string;
}

const TextContent = ({
  children,
  className = 'mt-4 text-suave-clear',
}: TextContentProps) => (
  <p className={classNames('text-sm font-montserrat', className)}>{children}</p>
);

const Info = ({
  content,
  image,
  title,
  subTitle,
  textDate,
  className,
  imageDesktop,
  imageMobile,
}: {
  content: ReactNode;
  image?:
    | 'digital-nomad'
    | 'programming'
    | 'reading'
    | 'feeling-proud'
    | 'dev-productivity';
  title?: string;
  subTitle?: string;
  textDate?: string;
  className?: string;
  imageDesktop?: ReactNode;
  imageMobile?: ReactNode;
}) => {
  const imgProps = {
    layout: 'fill',
    alt: '',
    src: `/assets/home/${image}.svg`,
  } as const;

  return (
    <div className={classNames('flex justify-between align-start', className)}>
      <div className="lg:mr-20 lg:flex-shrink-0 lg:w-6/12">
        {title && <Heading>{title}</Heading>}
        {subTitle && (
          <h6 className="text-suave-clear font-medium text-sm mt-4 font-montserrat">
            {subTitle}
          </h6>
        )}
        {textDate && (
          <TextContent className="font-medium mt-1 text-suave-opaque">
            {textDate}
          </TextContent>
        )}
        {imageMobile ||
          (image && (
            <div className="lg:hidden relative mx-auto w-52 h-72 mt-3">
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image {...imgProps} />
            </div>
          ))}
        {content}
      </div>
      {imageDesktop ||
        (image && (
          <div className="hidden lg:block relative w-full h-52 my-auto">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image {...imgProps} />
          </div>
        ))}
    </div>
  );
};

const TextTasksDone = ({ children }: { children: string }) => {
  return (
    <TextContent>
      <span
        dangerouslySetInnerHTML={{
          __html: children?.replace(/;/g, '; <br />'),
        }}
      />
    </TextContent>
  );
};

export const AboutMe = () => {
  return (
    <div className="mt-20 lg:mt-36 mb-16">
      <Info
        title="About me"
        image="digital-nomad"
        content={
          <>
            <TextContent>
              As a Front End developer, I have been turning great ideas into
              real products, which consequently end up having an extremely
              positive experience on people lives. Lately I&apos;ve been working
              on a large scale project for a real estate company that I&apos;ve
              been with since the first commit, when I did some POCs to define
              the best style libraries for our use case. The app has already
              been released and I&apos;m currently working on implementing new
              features, bug fixes and code improvements (including on other
              projects of the same company)
            </TextContent>
            <TextContent>
              During this project I am proud to say that I actively worked on
              practically the entire project, whether it was reviewing,
              refactoring or implementing new code.
            </TextContent>
            <TextContent>
              In these hundreds of tasks, I ended up implementing
              authentication, a headless cms, a component library, have being
              doing unit and integration tests, applied significant performance
              improvements, developed several pages with dozens of components,
              worked with complex forms that have multiple steps and much more.
              Definitely the best school I ever had, since I feel like I learned
              four years of development in one.
            </TextContent>
          </>
        }
        imageDesktop={
          <div className="hidden lg:block relative w-full h-72 my-auto">
            <Image layout="fill" src="/assets/home/digital-nomad.svg" alt="" />
          </div>
        }
      />
      <Info
        title="Experience"
        className="mt-10 lg:mt-20"
        subTitle="Mid-level Front End developer, Just Digital"
        textDate="DEZ 2021 - CURRENTLY / São Paulo"
        image="dev-productivity"
        imageMobile={
          <div className="lg:hidden relative mx-auto w-52 h-56 mt-4">
            <Image
              layout="fill"
              src="/assets/home/dev-productivity.svg"
              alt=""
            />
          </div>
        }
        content={
          <>
            <TextContent>
              As a mid level developer, I continued to do what I did as a Junior
              (read below), plus:
            </TextContent>
            <TextTasksDone>
              - Mentoring and guiding other developers; - Working on very
              complex tasks which I had to apply some design patterns
              (especially the Factory) to produce code that&apos;s trustable and
              easy to maintain; - Defining standard to follow leading to better
              code practices; - Converting angular code to React; - Integrating
              a headless cms; - Participating on technical interviews to
              validate the knowledge of candidates;
            </TextTasksDone>
          </>
        }
      />
      <Info
        className="mt-4 lg:mt-20"
        subTitle="Junior Front End developer, Just Digital"
        textDate="MAR 2019 - JAN 2021 / São Paulo"
        imageDesktop={
          <div className="h-full w-full hidden lg:block">
            <div className="relative w-full h-44 lg:mt-16 xl:mt-20">
              <Image layout="fill" src="/assets/home/programming.svg" alt="" />
            </div>
            <div className="hidden lg:block relative w-full h-56 mt-32">
              <Image
                layout="fill"
                src="/assets/home/feeling-proud.svg"
                alt=""
              />
            </div>
          </div>
        }
        imageMobile={
          <div className="lg:hidden relative mx-auto w-72 h-44 mt-10 mb-9">
            <Image layout="fill" src="/assets/home/programming.svg" alt="" />
          </div>
        }
        content={
          <>
            <TextContent>
              At Just Digital I worked together on efficient teams with Scrum
              Masters, Product Owners and other developers for bringing positive
              digital transformations. Having everyday direct contact with the
              stakeholders, I work on a large scale project that I&apos;m part
              of since the very beginning.
            </TextContent>
            <TextContent>
              The stack was React with NextJS, using bootstrap and
              styled-components. Having working on most of the code, I was
              extremely privileged to do:
            </TextContent>
            <TextTasksDone>
              - POCs for choosing the right libraries according to the use cases
              we have; - Initial the setups necessary for working with
              storybook, styled-components, react-query, react-testing-library;
              - Defining the correct project structure for working with hooks,
              utils and components; - Dozens of mobile-first landing pages with
              great responsiveness using bootstrap and styled-components for
              styles; - Several components (developed with accessibility in
              mind) documented with storybook; - Authentication using JWT made
              with axios and it&apos;s interceptors; - Several api requests for
              bringing data with react-query; - Excellent performance
              improvements leading to a very good pagespeed score; - Code
              reviews; - Created a flexible component library for reusing across
              different projects; - Extended bootstrap to create a ready-to-use
              design system; - Worked with gitflow for managing a better
              versioning;
            </TextTasksDone>
          </>
        }
      />
      <Info
        className="mt-10 lg:mt-36 lg:mb-28"
        title="Education"
        subTitle="Analysis and Systems Development, FECAF"
        textDate="FEB 2019 - MAY 2021 / São Paulo"
        imageMobile={
          <div className="lg:hidden relative mx-auto w-72 h-48 mt-6 mb-7">
            <Image layout="fill" src="/assets/home/reading.svg" alt="" />
          </div>
        }
        imageDesktop={
          <div className="hidden lg:block relative w-full h-48 -mt-2">
            <Image layout="fill" src="/assets/home/reading.svg" alt="" />
          </div>
        }
        content={
          <TextContent>
            In addition to the traditional learning and college subjects, we
            simulated the creation of startups and worked on the development of
            products using both Front and Back End stacks.
          </TextContent>
        }
      />
    </div>
  );
};
