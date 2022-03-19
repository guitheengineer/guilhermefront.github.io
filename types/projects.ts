import { SetStateAction } from 'react';

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

export type SeeMoreTypes = {
  seeMore: boolean;
  setSeeMore: (value: SetStateAction<boolean>) => void;
  className?: string;
};

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
  | 'typescript'
  | 'nextjs'
  | 'javascript'
  | 'storybook'
  | 'bootstrap'
  | 'formik';

export type Stack = Tech[];

export type Role = string | string[];

export type ScreensInfo = string[];

export type ProjectInfo = {
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
  screens?: ScreensInfo;
};

export type ProjectsList = ProjectInfo[];

export type ProjectContentProps = SeeMoreTypes & {
  img: string;
  is768: boolean;
  projectData: ProjectInfo;
};
