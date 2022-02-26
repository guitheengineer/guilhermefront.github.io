import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';

type NavProps = {
  title: 'github' | 'linkedin';
  size?: number;
};

export const PersonalIcon = ({ title, size = 19 }: NavProps) => (
  <a
    title="personal icon link"
    href={
      title === 'github'
        ? 'https://github.com/guilhermefront'
        : 'https://www.linkedin.com/in/guilherme-samuel-2aa7aa19b/'
    }
    className={classNames('cursor-pointer', { 'mr-6': title === 'github' })}
  >
    <Image
      alt={`${title} icon`}
      width={size}
      height={size}
      src={`/assets/personal-icons/${title}.svg`}
    />
  </a>
);

export const Nav = () => (
  <nav className="flex justify-between container items-center pt-8">
    <Link prefetch={false} href="/">
      <a className="text-sm font-poppins tracking-tighter text-suave-medium font-medium">
        Guilherme Samuel
      </a>
    </Link>
    <ul className="flex">
      <PersonalIcon title="github" />
      <PersonalIcon title="linkedin" />
    </ul>
  </nav>
);
