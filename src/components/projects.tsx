import React from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

function Projects(){
const { regionid } = useParams();
const navigate = useNavigate();
console.log(regionid)

const [projects, setProjects] = React.useState(null);
    React.useEffect(() => {
    async function fetchProjects() {
      const resp = await fetch(`api/projects/${regionid}`);
      console.log(resp);
      const data = await resp.json();
      console.log(data);
      setProjects(data);
    }
    fetchProjects();
  }, []);

    return(
        <h1>{projects?.name}</h1>
    )

}
export default Projects;