import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="title">
            <img src="./common/images/headshot.jpg" />
            <div className="description">
              <h1>Jonathan Shobrook</h1>
              <h2>I build software and study mathematics at UIUC.</h2>
            </div>
          </div>
          <div className="cta">
            <div className="contact">Contact Me</div>
            <div className="learn-more">Learn More</div>
          </div>
        </header>
      </Fragment>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("index"));
