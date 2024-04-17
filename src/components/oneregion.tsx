import React, { SyntheticEvent } from "react";
import { RiLinksFill } from "react-icons/ri";
import { IoIosInformationCircle } from "react-icons/io"
import { GiPlantsAndAnimals } from "react-icons/gi";
import { GiPoisonBottle } from "react-icons/gi";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function OneRegion({user}) {
  const [region, updateRegion] = React.useState(null);
  const { regionid } = useParams();
  const navigate = useNavigate();
  console.log(regionid)

  React.useEffect(() => {
    async function fetchRegion() {
      const resp = await fetch(`/api/region/${regionid}`);
      const regionDataText = await resp.text();
      console.log(regionDataText)
      const regionData = JSON.parse(regionDataText);
      
      updateRegion(regionData);
      console.log("this is the", regionData);
    }
    fetchRegion();
  }, []);

// async function deleteRegion(e: SyntheticEvent) {
//   try {
//     const token = localStorage.getItem("token");
//     console.log(token);
//     console.log(regionid);
//     await axios.delete(`api/regions/` + regionid, {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     navigate("/regions");
//   } catch (e: any) {
//     console.log(e.response.data);
//   }
// }

return (
    //title 
    <div className="container">
      {/* Title for Region Name */}
      <h1 className="title is-1">{region?.region_name}</h1>

              {region && user && (
          <Link to={`/projects/${regionid}`}>
            {" "}
            <button className="button community mr-6">
              {region?.region_name} Projects
            </button>{" "}
          </Link>
        )}
      

    {/* Cards for the areas */}
      <div className="columns is-multiline">
        {region?.areas[0]?.names.map((name, index) => (
          <div key={index} className="column is-one-quarter">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={region?.areas[0]?.images[index]} alt={name} />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h3 className="title is-4">{name}</h3>
                  
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
{/* Sections for General Information, Wildlife, Threats, and Links */}
      <section className="section">
        <h2 className="title is-2">
          <IoIosInformationCircle className="mr-2" /> General Information
        </h2>
        <p>{region?.info}</p>
      </section>

      <section className="section">
        <h2 className="title is-2">
          <GiPlantsAndAnimals className="mr-2" /> Wildlife
        </h2>
        <ul>
          {region?.wildlife[0]?.wildlife.map((wildlife, index) => ( 
            <li key={index}>{wildlife}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="title is-2">
          <GiPoisonBottle className="mr-2" /> Threats
        </h2>
        <ul>
          {region?.threats[0]?.threats.map((threat, index) => (
            <li key={index}>{threat}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="title is-2">
          <RiLinksFill className="mr-2" /> Links
        </h2>
        <ul>
          {region?.links[0]?.links.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </section>
    </div>
      
)

}

export default OneRegion;