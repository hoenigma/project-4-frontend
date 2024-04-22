import React, { SyntheticEvent, useState } from "react";
import axios, { formToJSON } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config"; 

export default function UpdateProject() {
  const navigate = useNavigate();
  const { projectid } = useParams();


  const [formData, setFormData] = useState({
    name_of_project: "",
    area_of_project: "",
    date_time: "",
    description: "",
    links: "",
    region_id: "",
  });

  console.log("Before Fetch",formData);
  console.log(projectid)

    React.useEffect(() => {
    async function fetchProjects() {
      const resp = await fetch(
        `${baseUrl}/project/${projectid}`
      );
      console.log("resp.data is", resp);
      const data = await resp.json();

      setFormData(data);
    }
    fetchProjects();
  }, [projectid]);
  console.log("After Fetch",formData);

  function handleChange(e: any) {
    const fieldName = e.target.name;
    const newFormData = structuredClone(formData);
    // console.log(newFormData)
    newFormData[fieldName as keyof typeof formData] = e.target.value;
    setFormData(newFormData);
  }

  async function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log(token);
    console.log("regionID",formData.region_id)
    const resp = await axios.put(
      `${baseUrl}/updateprojects/${projectid}`,
      formData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    console.log("resp", resp.data);
    navigate(`/projects/${formData.region_id}`);
  }
  return (
  <section className="section backgroundTwo m-0">
    <div className="container login is-flex-grow-0 add is-max-desktop custom-border-radius p-6">
      <div className="box mt-6">
      <h1 className="title">Update Project</h1>
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
        </div>

        <div className="field">
          <div className="control">
              <div className="is-flex is-justify-content-center">
                <button className="button">Submit</button>
                </div>
              </div>
        </div>
      </form>
    </div>
    </div>
    </section>
  );
}
