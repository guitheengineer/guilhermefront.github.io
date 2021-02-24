import { BlueButton } from 'components/blue-button';
import { Profile } from 'components/profile';

import './presentation.scss';
import notebook from 'assets/notebook.svg';

const Presentation = () => (
  <div className="Presentation">
    <section className="Presentation__call">
      <h1 className="Presentation__heading">
        <img className="Presentation__present-icon" alt="" src={notebook} />I
        build apps with
        <span className="Presentation__strong"> awesome code quality.</span>
      </h1>
      <p className="Presentation__paragraph">
        As a React developer, I have been writing code that is trustable, clean
        and easy to maintain.
      </p>
      <a href="mailto:gsdevelopercontact@gmail.com">
        <BlueButton className="Presentation__button">Contact</BlueButton>
      </a>
    </section>
    <Profile />
  </div>
);
export default Presentation;
