import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { renderWithRouter } from '../test-utils';
import { PersonalIcon } from 'components/personal-icon';
import { Work } from 'components/work';

test('if routing works correctly', async () => {
  const {
    history: { navigate },
  } = renderWithRouter(<App />, { route: '/' });
  expect(screen.getByTestId('App')).toContainElement(
    screen.getByTestId('Home')
  );

  navigate('/projects/:project');
  expect(screen.getByTestId('App')).toContainElement(
    screen.getByTestId('Project')
  );

  render(<Work title="Quizby"> </Work>);
  screen.debug(screen.getByRole('rolelololol'));
});

test('If social media links is working', () => {
  const { rerender } = render(<PersonalIcon title="github" />);

  expect(screen.getByRole('link').getAttribute('href')).toBe(
    'https://github.com/gsdeveloper'
  );

  rerender(<PersonalIcon title="linkedin" />);
  expect(screen.getByRole('link').getAttribute('href')).toBe(
    'https://www.linkedin.com/in/guilherme-samuel-2aa7aa19b/'
  );
});
