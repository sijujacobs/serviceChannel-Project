import React from "react";
import "./css/about.css";
const About = (props) => {
  return (
    <div className="about">
      <div className="documentation">
        <div className="documentHeader">About Project</div>
        <div className="topicRow">
          <div className="topicLabel">Tools & Technologies</div>
          <div className="topicDesc">
            <p>ReactJS, Redux, React-Redux, Redux-Thunk, Axios, gh-pages</p>
            <p>HTML, CSS, SASS</p>
          </div>
        </div>
        <div className="topicRow">
          <div className="topicLabel">React App</div>
          <div className="topicDesc">
            <p>SPA(Single Page Application) with React-router, </p>
            <p>Project - Service Channel</p>
          </div>
        </div>
        <div className="topicRow">
          <div className="topicLabel">Reddit API</div>
          <a
            alt="git"
            href="https://www.reddit.com/subreddits/popular.json?raw_json=1"
          >
            API
          </a>
        </div>

        <div className="topicRow">
          <div className="topicLabel">
            <p>Live Demo</p>
          </div>
          <div className="topicDesc">
            <a
              alt="git"
              href="https://sijujacobs.github.io/serviceChannel-Project/"
            >
              Demo
            </a>
            <p>https://sijujacobs.github.io/serviceChannel-Project/</p>
          </div>
        </div>
        <div className="topicRow">
          <div className="topicLabel">
            <p>Source Code </p>
          </div>
          <div className="topicDesc">
            <a
              alt="git"
              href="https://github.com/sijujacobs/serviceChannel-Project"
            >
              Project
            </a>
            <p>https://github.com/sijujacobs/serviceChannel-Project</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
