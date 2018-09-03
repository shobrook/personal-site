// System
import React, { Component } from "react";
import ReactDOM from "react-dom";

// Local
import ProjectCard from "./components/ProjectCard";

import "./index.scss";

class Main extends Component {
  render() {
    const projects = [
      ["src/common/images/thumbnails/dasher.png", "http://dashersoftware.com/"],
      [
        "src/common/images/thumbnails/neuropipe.png",
        "http://github.com/shobrook/neuropipe"
      ],
      [
        "src/common/images/thumbnails/bitvision.png",
        "http://github.com/shobrook/bitvision"
      ],
      [
        "src/common/images/thumbnails/typesense.png",
        "http://github.com/shobrook/typesense"
      ],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ],
      [
        "src/common/images/thumbnails/placeholder.png",
        "http://github.com/shobrook"
      ]
    ];

    return (
      <div className="main">
        <header className="header">
          <div className="title">
            <img className="headshot" src="src/common/images/headshot.jpg" />
            <div className="description">
              <h1>Jonathan Shobrook</h1>
              <h2>I build software and study mathematics at UIUC.</h2>
            </div>
          </div>
          <div className="cta">
            <div className="contact">Contact Me</div>
            <div className="learn-more">Learn More</div>
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
