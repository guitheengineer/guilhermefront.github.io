import { ReactNode, useState } from 'react';
import NextImage from 'next/image';
import { ScreensInfo } from 'types';
import Image from 'next/image';
import { SeeMore } from 'components/index';

type ContentTypes = 'story' | 'challenges' | 'lessons learned';

const Illustration = ({ type }: { type: ContentTypes }) => (
  <NextImage
    width={330}
    height={330}
    alt="illustration"
    src={`/assets/content-illustrations/${type}.svg`}
  />
);

const Description = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 font-medium font-montserrat text-suave-light mb-0 lg:max-w-lg">
    {children}
  </p>
);

const Title = ({ children }: { children: ReactNode }) => (
  <h3 className="font-montserrat font-medium text-2xl tracking-[-0.04em] capitalize text-suave-dark">
    {children}
  </h3>
);

type ContentProps = {
  children: ReactNode;
  type: ContentTypes;
  screens?: ScreensInfo;
};

export const Content = ({ children, type, screens = [] }: ContentProps) => {
  const [seeMore, setSeeMore] = useState<boolean>(false);

  return (
    <section className="d-none mt-20 lg:mt-24 flex content-between flex-1 md:flex-wrap">
      <div>
        <Title>{type}</Title>
        <Description>{children}</Description>

        {type === 'story' && (
          <div className="flex-1 flex flex-col content-center my-7 lg:content-start">
            {screens.length === 0 ? (
              <Illustration type={type} />
            ) : (
              <>
                <ul
                  data-testid="screens"
                  className="flex flex-wrap relative mb-2 gap-4"
                >
                  {screens.map((title) => (
                    <li className="flex" key={title}>
                      <Image
                        alt={title}
                        width={200}
                        height={350}
                        className="mt-3 w-full h-auto rounded-lg"
                        src={`/assets/screens/${title.toLowerCase()}.png`}
                      />
                    </li>
                  ))}
                </ul>
                <SeeMore
                  className="ml-0"
                  setSeeMore={setSeeMore}
                  seeMore={seeMore}
                />
              </>
            )}
          </div>
        )}
        {type === 'lessons learned' && (
          <div className="flex-1 flex content-center items-center">
            <Illustration type={type} />
          </div>
        )}
        {type === 'challenges' && (
          <div className="flex-1 flex content-center items-center ml-16 lg:my-10 lg:content-start">
            <Illustration type={type} />
          </div>
        )}
      </div>
    </section>
  );
};
