import React, { ReactElement } from 'react';
import {
  createHistory,
  createMemorySource,
  LocationProvider,
  Router,
} from '@reach/router';
import { render } from '@testing-library/react';

const renderWithRouter = (
  ui: ReactElement,
  { route = '/', history = createHistory(createMemorySource(route)) }
) => ({
  ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
  history,
});

const renderWithRouterWrapper = (
  ui: ReactElement,
  { route = '/', history = createHistory(createMemorySource(route)) }
) => ({
  ...render(
    <LocationProvider history={history}>
      <Router>{ui}</Router>
    </LocationProvider>
  ),
  history,
});

export { renderWithRouter, renderWithRouterWrapper };
