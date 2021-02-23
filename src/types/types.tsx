export type Projects =
  | 'quizby'
  | 'betteraim'
  | 'budget estimator'
  | 'twitter trending topics'
  | 'react donut component'
  | 'binary/decimal converter'
  | 'consulta-cnpj'
  | 'neudoro';

export type Companies = 'personal project' | 'micg pinturas';

export type Tech =
  | 'react'
  | 'redux'
  | 'sass'
  | 'styled-components'
  | 'mongo'
  | 'node'
  | 'html'
  | 'css'
  | 'figma'
  | 'typescript';

export type Stack = Tech[];

export type Role = string | string[];

export type Screens = { title: string; image?: string; description: string }[];

export type ProjectContent = {
  title: Projects;
  company: Companies;
  role: Role;
  image: 'first';
  stack: Stack;
  description: string;
  story: string;
  challenges: string;
  learned: string;
  shortDescription: string;
  site: string;
  screens?: Screens;
};

export type ProjectsList = ProjectContent[];

export type ProjectContentProps = {
  img: string;
  is768: boolean;
  seeMore: boolean;
  setSeeMore: (value: React.SetStateAction<boolean>) => void;
  projectData: ProjectContent;
};
