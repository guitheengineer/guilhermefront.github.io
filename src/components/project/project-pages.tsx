import React, { useState } from 'react';
import { Icon } from 'components/icon';
import { Content } from 'components/content/Content';
import Screen from './Screen';
import { useMediaQuery } from 'react-responsive';

type ProjectContentProps = {
  img: string;
};

export const Quizby = ({ img }: ProjectContentProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const is768 = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <section className="Project__presentation">
        <div className="Project__content">
          <h4 className="Project__role">
            Fullstack developer (ReactJS, Mongo)
          </h4>
          <h1 className="Project__title">Quizby</h1>
          {is768 ? <img className="Project__image" src={img} /> : null}
          <p className="Project__description">
            Developed and designed from scratch, quizby is a fun quiz app with
            CRUD operations.
          </p>
          <a href="quizby.heroku.app" className="Project__link">
            quizby.herokuapp.com
          </a>
          <div className="Project__icons">
            <Icon
              title="react"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="redux"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="figma"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="mongo"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="sass"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="node"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="typescript"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
          </div>
          <div />
        </div>

        {!is768 ? <img className="Project__image" src={img} /> : null}
      </section>

      <Content type="story">
        Quizby aims to be a quiz app which users can search for quizzes, get
        recomended ones and create their own, so they can share with friends.
      </Content>
      <h2 className="Content__title Content__title--screens">Screens</h2>
      <ul className="Screens">
        <Screen name="Home">
          Website visitors can play with a demo in the landing page. Other core
          functionalities are shown as well.
        </Screen>
        <Screen name="Gaming">
          Testing knowledge is fun with quizby. The design is clean and
          animations are cool. Users can see the answers history and acknowledge
          if their past answer as correct or wrong.
        </Screen>
        <Screen name="Completed">
          Users can see their final results shown nicely by a donut chart (using
          my library react-donut-chart). It’s also possible to play again or go
          back to see other quizzes.
        </Screen>
        <Screen name="Signup and login forms">
          Using Material UI textfield components facilitated not only the user
          accessibility, but the errors shown by validating the forms.
        </Screen>
        <Screen name="User profile">
          Stats, created quizzes and played ones was nicely shown on this
          profile section. Here, users that are authenticated can edit their own
          quizzes.
        </Screen>
        <Screen name="Quizzes">
          Users can search efficiently any quizzes they want to play. Also is
          shown the most played ones and categories to search for.
        </Screen>
        <button
          className="Project__seemore"
          onClick={() => setSeeMore((prevState) => !prevState)}
        >
          <span className="Project__seemore-title">See more</span>
          <svg
            className="Project__seemore-icon"
            width="13"
            height="8"
            style={{ transform: seeMore ? `rotate(180deg)` : `rotate(0deg)` }}
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6.5 6.5L12 1"
              stroke="#6492A4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {seeMore ? (
          <>
            <Screen name="Categories">
              Users can search for quizzes by category.
            </Screen>
            <Screen name="View quiz">
              Here’s where the quiz info is shown before user start playing.
            </Screen>
            <Screen name="Menu">
              Menu is shown with a nice dropdown animation so users still have
              the experience that they’re inside the game.
            </Screen>
          </>
        ) : null}
      </ul>
      <Content marginTop={60} type="challenges">
        Designing and developing an app like this from scratch is challenging,
        as the project started growing fastly, I felt the lack of a sustainable
        development process, so, I implemented Scrum and defined user stories.
        The addition of an agile process turned the development experience much
        better, just knowing what’s needed to do and why was a big factor for
        the app success. We have to always define clearly the project goals so
        we can prevent unexpected results. Another mistake was implementing
        features that not necessarily increase the product value, to avoid this,
        we should stick up to the features priority defined along with the agile
        process and work solidly on it.
      </Content>
      <Content type="lessons learned">
        Quality work requires best practices. As an example, selecting data from
        the state with Redux started to get a mess until I read and applied this
        awesome style guide from the docs. It helped me a lot to improve the
        code readability. Avoiding code duplication does not always mean that
        the benefit will outweigh the cost to implement the abstraction, but,
        when you analyze that the gains are better than the cost, definitely is
        a good way to improve code quality.
      </Content>
    </>
  );
};

export const BetterAim = ({ img }: ProjectContentProps) => {
  const [seeMore, setSeeMore] = useState(false);

  const is768 = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <section className="Project__presentation">
        <div className="Project__content">
          <h4 className="Project__role">Front-end developer (ReactJS)</h4>
          <h1 className="Project__title">BetterAim</h1>
          {is768 ? <img className="Project__image" src={img} /> : null}
          <p className="Project__description">
            Developed and designed from scratch, BetterAim is an aim trainer for
            gamers.
          </p>
          <a href="betteraim.beroku.app" className="Project__link">
            betteraim.herokuapp.com
          </a>
          <div className="Project__icons">
            <Icon
              title="react"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />

            <Icon
              title="figma"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />

            <Icon
              title="sass"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />

            <Icon
              title="typescript"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
          </div>
          <div />
        </div>

        {!is768 ? <img className="Project__image" src={img} /> : null}
      </section>

      <Content type="story">
        There’re many aim trainers out there, but they fail on one crucial user
        demand: the ability to customize their experience. Only themselves
        understand the weakness that need to be trained, so with BetterAim
        players can change almost everything to fit their needs and extract the
        most productive training to improve.
      </Content>
      <h2 className="Content__title Content__title--screens">Screens</h2>
      <ul className="Screens">
        <Screen name="Home">
          Website visitors can play with a demo in the landing page. Other core
          functionalities are shown as well.
        </Screen>
        <Screen name="Home">
          Testing knowledge is fun with quizby. The design is clean and
          animations are cool. Users can see the answers history and acknowledge
          if their past answer as correct or wrong.
        </Screen>
        <Screen name="Home">
          Users can see their final results shown nicely by a donut chart (using
          my library react-donut-chart). It’s also possible to play again or go
          back to see other quizzes.
        </Screen>
        <Screen name="Home">
          Using Material UI textfield components facilitated not only the user
          accessibility, but the errors shown by validating the forms.
        </Screen>
        <Screen name="Home">
          Stats, created quizzes and played ones was nicely shown on this
          profile section. Here, users that are authenticated can edit their own
          quizzes.
        </Screen>
        <Screen name="Home">
          Users can search efficiently any quizzes they want to play. Also is
          shown the most played ones and categories to search for.
        </Screen>
        <button
          className="Project__seemore"
          onClick={() => setSeeMore((prevState) => !prevState)}
        >
          <span className="Project__seemore-title">See more</span>
          <svg
            className="Project__seemore-icon"
            width="13"
            height="8"
            style={{ transform: seeMore ? `rotate(180deg)` : `rotate(0deg)` }}
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L6.5 6.5L12 1"
              stroke="#6492A4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {seeMore ? (
          <>
            <Screen name="Home">
              Website visitors can play with a demo in the landing page. Other
              core functionalities are shown as well.
            </Screen>
            <Screen name="Home">
              Website visitors can play with a demo in the landing page. Other
              core functionalities are shown as well.
            </Screen>
            <Screen name="Home">
              Website visitors can play with a demo in the landing page. Other
              core functionalities are shown as well.
            </Screen>
          </>
        ) : null}
      </ul>
      <Content marginTop={60} type="challenges">
        Designing and developing an app like this from scratch is challenging,
        as the project started growing fastly, I felt the lack of a sustainable
        development process, so, I implemented Scrum and defined user stories.
        The addition of an agile process turned the development experience much
        better, just knowing what’s needed to do and why was a big factor for
        the app success. We have to always define clearly the project goals so
        we can prevent unexpected results. Another mistake was implementing
        features that not necessarily increase the product value, to avoid this,
        we should stick up to the features priority defined along with the agile
        process and work solidly on it.
      </Content>
      <Content type="lessons learned">
        Quality work requires best practices. As an example, selecting data from
        the state with Redux started to get a mess until I read and applied this
        awesome style guide from the docs. It helped me a lot to improve the
        code readability. Avoiding code duplication does not always mean that
        the benefit will outweigh the cost to implement the abstraction, but,
        when you analyze that the gains are better than the cost, definitely is
        a good way to improve code quality.
      </Content>
    </>
  );
};
