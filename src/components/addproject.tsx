import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProject({ user }) {
  const navigate = useNavigate();
  const { regionid } = useParams();

  const [formData, setFormData] = useState({
    name_of_project: "",
    area_of_project: "",
    date_time: "",
    description: "",
    links: "",
  });

  const [errorData, setErrorData] = useState({
    name_of_project: "",
    area_of_project: "",
    date_time: "",
    description: "",
    links: "",
  });

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
    setErrorData({
      name_of_project: "",
      area_of_project: "",
      date_time: "",
      description: "",
      links: "",
    });
  }

  async function handleSubmit(e: SyntheticEvent) {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(formData);
      const resp = await axios.post(`http://localhost:5173/api/projects/add/${regionid}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("resp", resp.data);
      navigate(`/projects/${regionid}`);
      setFormData({
        name_of_project: "",
        area_of_project: "",
        date_time: "",
        description: "",
        links: "",
      });
    } catch (e: any) {
      setErrorData(e.response.data.errors);
    }
  }
  return (
    <div className="container">
      <h1 className="title">Add Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name of Project</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name_of_project"
              value={formData.name_of_project}
              onChange={handleChange}
            />
          </div>
          {errorData.name_of_project && (
            <p className="help is-danger">{errorData.name_of_project}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Area of Project</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="area_of_project"
              value={formData.area_of_project}
              onChange={handleChange}
            />
          </div>
          {errorData.area_of_project && (
            <p className="help is-danger">{errorData.area_of_project}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Date & Time</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="date_time"
              value={formData.date_time}
              onChange={handleChange}
            />
          </div>
          {errorData.date_time && (
            <p className="help is-danger">{errorData.date_time}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          {errorData.description && (
            <p className="help is-danger">{errorData.description}</p>
          )}
        </div>

        <div className="field">
          <label className="label">Links</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="links"
              value={formData.links}
              onChange={handleChange}
            />
          </div>
          {errorData.links && (
            <p className="help is-danger">{errorData.links}</p>
          )}
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}
