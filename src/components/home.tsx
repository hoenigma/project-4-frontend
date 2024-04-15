import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../assests/AboutMe.jpeg";
import Signup from "../assests/Signup.png";

function Home() {
  return (
    <section className="section home m-0">
      <section className="hero is-fullheight is-justify-content-center">
        <div className="hero-body hometext has-text-centered is-flex-grow-0 custom-border-radius is-flex-direction-column is-align-self-center">
          <div className="is-size-1 has-text-dark title">
            Hello
            <p className="subtitle is-size-4 has-text-dark m-4">
              Welcome to buddies of the ocean!<br></br>
              For all those who care about the coast and the seas of the UK,
              this app is for the shared goal of protecting and supporting our
              coasts.<br></br>
              Have a look for links to big projects and sign up to talk about
              local projects.
            </p>
          </div>
        </div>
        <div className="columns is-flex-grow-0 custom-border-radius is-align-self-center">
          <div className="column">
            <div className="card">
              <Link to="/regions">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Cloud-free_Europe_ESA17486464_%28British_Isles%29.jpeg/1024px-Cloud-free_Europe_ESA17486464_%28British_Isles%29.jpeg"
                      alt="Image of the british"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Regions</p>
                    </div>
                  </div>

                  <div className="content">
                    Click here to see all the coastal regions for the British
                    Isles.
                    <br />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <Link to="/aboutme">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={AboutMe}
                      alt="Image of the a person looking over the sea"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">About Me</p>
                    </div>
                  </div>

                  <div className="content">
                    Get to know a little about the creator of this app!
                    <br />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <Link to="/signup">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={Signup} alt="Image of the british" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">Sign up</p>
                    </div>
                  </div>

                  <div className="content">
                    Sign up to be able to join the community. Find and post
                    local projects and talk about your favourite coast
                    <br />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Home;
