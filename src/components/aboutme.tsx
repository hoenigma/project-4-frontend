import React, { useState } from "react";
import emailjs from "emailjs-com";
import AboutMe2 from "../assests/AboutMe2.jpg";
import { IUser } from "../interfaces/user";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function AboutMe({ user }: { user: null | IUser }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    question: "",
  });

  function handleChange(e: any) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    // Send email using EmailJS
    emailjs
      .sendForm(
        "service_f1j3205",
        "template_mvvzenm",
        e.target,
        "DjzQM20E2Xnoj2pAo"
      )
      .then(
        (result) => {
          console.log(result.text);
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            question: "",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <section className="section background m-0">
        <div className="section hero is-flex is-fullheight is-flex-direction-row">
          <div className="container is-max-desktop is-flex is-justify-content-space-between">
            <div className="card comment custom-border-radius p-6 mr-4">
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
                  This app was created using a pyhton Flask API and a React
                  front end. <br />
                  As someone who studied Oceanogrpahy at university and has a
                  passion for the Ocean I thought to create an app for people to
                  see our rich regions of the coast and share projects they are
                  doing to protect them.
                  <br />
                </div>
                {/* LinkedIn and GitHub links */}
                <div className="is-inline-block">
                  <a
                    href="https://www.linkedin.com/in/hoenigma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="is-size-3 mr-5" />
                  </a>{" "}
                </div>
                <div className="is-inline-block">
                  <a
                    href="https://github.com/hoenigma"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="is-size-3 mr-5" />
                  </a>{" "}
                </div>
              </div>
            </div>

            {user && (
              <div className="card comment custom-border-radius p-6" style={{ width: "100%" }}>
                <header className="card-header">
                  <p className="card-header-title">Send a Question</p>
                </header>
                <div className="card-content">
                  <form onSubmit={handleSubmit}>
                    <div className="field">
                      <label className="label">Name</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Email</label>
                      <div className="control">
                        <input
                          className="input"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="field">
                      <label className="label">Question</label>
                      <div className="control">
                        <textarea
                          className="textarea"
                          name="question"
                          value={formData.question}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="field">
                      <div className="control">
                        <button className="button" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
