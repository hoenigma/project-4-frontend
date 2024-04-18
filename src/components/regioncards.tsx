import { Link, useLinkClickHandler } from "react-router-dom";
// import { IAnimal } from "../interfaces/animal";
import React from "react";
import { IRegion } from "../interfaces/region";

function RegionCards({ id, country, region_name, image, areas }: IRegion) {
  // Access areas in the model
  if (Array.isArray(areas) && areas.length > 0) {
    const areaNames = areas[0].names; // Assuming the 'names' property exists in each area object

    console.log("The areas are", areaNames.length);
  }

  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/region/${id}`}>
        <div className="card region" style={{ height: "100%" }}>
          <div className="card-header is-justify-content-space-between p-4">
            <div className="title is-4">{region_name}</div>
          </div>
          <figure className="image is-1by1">
            <img src={image} alt={region_name} />
          </figure>
          <div className="columns is-flex-grow-0 ">
            <div className="column">
              <div className="card-content p-4">
                <div className="is-flex is-flex-direction-column">
                  <p className="has-text-weight-bold is-size-6">
                    Areas include:
                  </p>
                  <div className="is-max-height custom-height is-clipped">
                    {areas[0].names[0]} and {areas[0].names[1]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default RegionCards;
