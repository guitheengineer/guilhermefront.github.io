import { ReactNode } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import classNames from 'classnames';

type ContentTypes = 'story' | 'challenges' | 'lessons learned';

type Props = {
  children: ReactNode;
  type: ContentTypes;
  marginTop?: number;
};

export const Illustration = ({ type }: { type: ContentTypes }) => (
  <Image
    width={330}
    height={330}
    alt="illustration"
    src={`assets/content-illustrations/${type}.svg`}
  />
);

const Title = ({ children }: { children: ReactNode }) => (
  <h1 className="font-medium text-base font-montserrat text-suave-dark capitalize">
    {children}
  </h1>
);

const Description = ({ children }: { children: ReactNode }) => (
  <p className="mt-4 font-medium font-montserrat text-suave-light">
    {children}
  </p>
);

export const Content = ({ children, type }: Props) => {
  const is768 = useMediaQuery({ maxWidth: 768 });

  if (is768) {
    return (
      <div className="mt-16 flex content-between flex-1 md:flex-wrap">
        <div className="max-w-md">
          <Title>{type}</Title>
          {type === 'story' && (
            <div className="flex-1 flex content-center items-center lg:my-10 lg:content-start"></div>
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
          <Description>{children}</Description>
        </div>
      </div>
    );
  }

  return (
    <div
      className={classNames('mt-40 flex content-between flex-1 md:flex-wrap', {
        'mt-40': type === 'story',
        'mt-20': type === 'challenges',
        'mt-32': type === 'lessons learned',
      })}
    >
      {type === 'challenges' && (
        <div className="flex-1 flex content-center items-center mb-16">
          <Illustration type={type} />
        </div>
      )}
      <div className="max-w-md">
        <Title>{type}</Title>
        <Description>{children}</Description>
      </div>
      {type === 'lessons learned' && (
        <div className="flex-1 flex content-center items-center">
          <Illustration type={type} />
        </div>
      )}
      {type === 'story' && (
        <div className="flex-1 flex content-center items-center lg:my-10 lg:content-start">
          <Illustration type={type} />
        </div>
      )}
    </div>
  );
};
