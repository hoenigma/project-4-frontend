import React from "react";
import { Link } from "react-router-dom";
import AboutMe from "../assests/AboutMe.jpeg";
import Signup from "../assests/Signup.png";
import { IUser } from "../interfaces/user";

function Home({ user }: { user: null | IUser }) {
  return (
    <section className="section background m-0">
      <section className="hero is-fullheight is-justify-content-center">
        <div className="hero-body hometext has-text-centered is-flex-grow-0 custom-border-radius is-flex-direction-column is-align-self-center">
          {user && (
            <div className="is-size-1 has-text-dark title has-text-weight-bold">
              Hi {user?.username}!
            </div>
          )}
          <div className="is-size-1 has-text-dark title has-text-weight-bold has-background-white">
            Welcome to Buddies of the Ocean!
          </div>
          <p className="subtitle is-size-4 has-text-dark m-4 has-text-weight-bold has-background-white">
            For all those who care about the coast and the seas of the UK, this
            app is for the shared goal of protecting and supporting our coasts.
            <br></br>
            Have a look for links to big projects and sign up to find or talk
            about your local projects.
          </p>
        </div>
        <div className="columns is-flex-grow-0 ">
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
          {!user && (
            <div className="column">
              <div className="card">
                <Link to="/signup">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={Signup} alt="Circle with a person in" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Sign up</p>
                      </div>
                    </div>
                    <div className="content">
                      Find and post local projects and talk about your favourite
                      coast!
                      <br />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
          {user && (
            <div className="column">
              <div className="card">
                <Link to="/user">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={Signup} alt="Circle with a person in" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">Your Page</p>
                      </div>
                    </div>
                    <div className="content">
                      Update your details or remove your account.
                      <br />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </section>
  );
}

export default Home;
