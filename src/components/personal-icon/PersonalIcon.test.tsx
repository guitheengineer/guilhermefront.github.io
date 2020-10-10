import { render } from '@testing-library/react';
import React from 'react';
import PersonalIcon from './PersonalIcon';

test('If social media links is working', () => {
  const { getByRole, rerender } = render(<PersonalIcon title="github" />);

  expect(getByRole('link').getAttribute('href')).toBe(
    'https://github.com/gsdeveloper'
  );

  rerender(<PersonalIcon title="linkedin" />);
  expect(getByRole('link').getAttribute('href')).toBe(
    'https://www.linkedin.com/in/guilherme-samuel-2aa7aa19b/'
  );
});
