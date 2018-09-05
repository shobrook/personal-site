// System
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Local
import ProjectCard from "./components/ProjectCard";

import "./index.scss";

class Main extends Component {
  render() {
    const projects = [
      ["./images/thumbnails/dasher.png", "http://dashersoftware.com/"],
      [
        "./images/thumbnails/neuropipe.png",
        "http://github.com/shobrook/neuropipe"
      ],
      [
        "./images/thumbnails/bitvision.png",
        "http://github.com/shobrook/bitvision"
      ],
      [
        "./images/thumbnails/typesense.png",
        "http://github.com/shobrook/typesense"
      ],
      ["./images/thumbnails/placeholder.png", "http://github.com/shobrook"],
      ["./images/thumbnails/placeholder.png", "http://github.com/shobrook"],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ],
      ["./images/thumbnails/placeholder.png", "http://github.com/shobrook"],
      ["./images/thumbnails/placeholder.png", "http://github.com/shobrook"],
      ["./images/thumbnails/placeholder.png", "http://github.com/shobrook"]
    ];

    return (
      <div className="main">
        <header className="header">
          <div className="title">
            <img className="headshot" src="./images/headshot.jpg" />
            <div className="description">
              <h1>Jonathan Shobrook</h1>
              <h2>
                I build <em>software</em> and study <em>mathematics</em> at
                UIUC.
              </h2>
            </div>
          </div>
          <div className="cta">
            <div className="contact">Say Hello</div>
            <div className="learn-more">About Me</div>
          </div>
          <h3 className="recruiter-message">
            Are you a recruiter? <a>Read my CV</a>
          </h3>
        </header>
        <section className="projects">
          <div className="top-fader" />
          <div className="bottom-fader" />
          {projects.map(project => {
            return <ProjectCard thumbnail={project[0]} url={project[1]} />;
          })}
        </section>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("index"));
