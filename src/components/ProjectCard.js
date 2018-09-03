// System
import React, { Component } from "react";

// Local
import "./ProjectCard.scss";

class ProjectCard extends Component {
  render() {
    const { thumbnail, url } = this.props;

    return (
      <a className="project-card" href={url}>
        <img src={thumbnail} />
      </a>
    );
  }
}

export default ProjectCard;
