import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function Projects({ user }) {
  const { regionid } = useParams();
  const navigate = useNavigate();
  console.log(regionid);

  const [projects, setProjects] = React.useState(null);
  React.useEffect(() => {
    async function fetchProjects() {
      const resp = await axios.get(
        `http://localhost:5173/api/projects/${regionid}`
      );
      console.log(resp);

      setProjects(resp.data);
    }
    fetchProjects();
  }, []);
  console.log(projects);
  //   const project = projects[0]

  async function deleteProject(e: any) {
    try {
      const token = localStorage.getItem("token");
      const projectId = e.currentTarget.value;
      console.log(projectId);
      await axios.delete(`http://localhost:5173/api/projects/` + projectId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      location.reload();
    } catch (e: any) {
      console.error("Error deleting project:", e.response.data);
    }
  }

  return (
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title">Projects</h1>
        </div>
        <div className="level-right">
          <Link to={`/addproject/${regionid}`} className="button is-primary">
            Add Project
          </Link>
        </div>
      </div>
      <div className="columns is-multiline">
        {projects &&
          projects?.map((project) => (
            <div className="column is-4" key={project.id}>
              <div className="card">
                <div className="card-content">
                  <p className="title">{project.name_of_project}</p>
                  <p className="subtitle">Area: {project.area_of_project}</p>
                  <p>When: {project.date_time}</p>
                  <p>
                    Link: <a href={project.links}>{project.links}</a>
                  </p>
                  <div className="content">
                    Information: {project.description}
                  </div>
                  {user && user.id === project.user_id && (
                    <div>
                    <button
                      onClick={deleteProject}
                      value={project.id}
                      className="button is-danger"
                    >
                      Delete
                    </button>
                    <button
                      onClick={deleteProject}
                      value={project.id}
                      className="button is-warning"
                    >
                      Update
                    </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Projects;
