import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { IUser } from "../interfaces/user"
import { IProject } from "../interfaces/project";

type Projects = null | Array<IProject>;


function Projects({ user }: { user: null | IUser }) {
  const { regionid } = useParams();
  const navigate = useNavigate();
  console.log(regionid);

  const [projects, setProjects] = React.useState<Projects>(null);
  React.useEffect(() => {
    async function fetchProjects() {
      const resp = await axios.get(
        `/api/projects/${regionid}`
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
      await axios.delete(`/api/projects/` + projectId, {
        headers: { Authorization: `Bearer ${token}` },
      });
      location.reload();
    } catch (e: any) {
      console.error("Error deleting project:", e.response.data);
    }
  }

  return (
     <section className="section backgroundTwo m-0">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title">Projects</h1>
        </div>
        <div className="level-right">
          <Link to={`/addproject/${regionid}`}>
            <button className="button">Add Project</button>
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
                      className="button is-danger mr-3"
                    >
                      Delete 
                    </button>
                    <Link to ={`/updateprojects/${project.id}`}>
                    <button
            
                      value={project.id}
                      className="button is-warning"
                    >
                      Update
                    </button>
                    </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
    </section>
  );
}

export default Projects;
