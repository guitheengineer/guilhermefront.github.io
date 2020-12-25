import { Icon } from "components/icon";
import React from "react";
import "./project.scss";
import { RouteComponentProps, useParams } from "@reach/router";
import { Content } from "components/content/Content";

const image = require.context("assets/work-demos", false, /\.(png|jpe?g|svg)$/);

const BetterAim = () => <div></div>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Project = (_props: RouteComponentProps) => {
  const { project } = useParams();
  console.log(project);
  // if (project) {
  //   return [BetterAim]
  // }
  return (
    <div className="Project">
      <section className="Project__presentation">
        <div className="Project__content">
          <h4 className="Project__role">Front-end developer (ReactJS)</h4>
          <h1 className="Project__title">BetterAim</h1>
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
              title="react"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="react"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
            <Icon
              title="react"
              className="Project__icon"
              imgClassName="Project__icon-img"
            />
          </div>
          <div />
        </div>
        <img
          className="Project__image"
          src={image(`./${project}.png`).default}
        />
      </section>
      <Content type="story">
        There’re many aim trainers out there, but they fail on one crucial user
        demand: the ability to customize their experience. Only themselves
        understand the weakness that need to be trained, so with BetterAim
        players can change almost everything to fit their needs and extract the
        most productive training to improve.
      </Content>
    </div>
  );
};

export default Project;
