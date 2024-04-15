import React from "react";
import AboutMe2 from "../assests/AboutMe2.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function AboutMe() {
  return (
    <>
      <div className="section hero is-flex is-fullheight is-flex-direction-row">
        <div className="container comment is-max-desktop custom-border-radius p-6">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">About Me!</p>
            </header>
            <div className="card-image">
              <figure className="image is-4by3">
                <img
                  src={AboutMe2}
                  alt="Picture of person swimming with a manatee"
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="content">
                Hello! My name is Matthew Hoenig, I created this app as one of
                my projects during my course at General Assembly. <br />
                This app was created using a pyhton FLask API and a React front
                end. <br />
                As someone who studied Oceanogrpahy at university and has a
                passion for the Ocean I thought to create an app for people to
                see our rich regions of the coast and share projects they are
                doing to protect them.
                <br />
              </div>
              {/* LinkedIn and GitHub links */}
              <div className="is-inline-block">
                <a
                  href="https://www.linkedin.com/in/your-linkedin-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="is-size-3 mr-5" />
                </a>{" "}
              </div>
              <div className="is-inline-block">
                <a
                  href="https://github.com/your-github-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="is-size-3 mr-5" />
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
