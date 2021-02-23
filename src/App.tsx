import './App.scss';
import { Router } from '@reach/router';
import { Home } from 'components/home';
import { Project } from 'components/project';

const App = () => (
  <div data-testid="App" className="App">
    <Router>
      <Home path="/" />
      <Project path="/projects/:project" />
    </Router>
  </div>
);

export default App;
