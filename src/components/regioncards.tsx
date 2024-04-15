import { Link, useLinkClickHandler } from "react-router-dom";
// import { IAnimal } from "../interfaces/animal";
import React from "react";

function RegionCards() {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link to={`/region/${id}`}>
        <div className="card">
          <div className="card-header is-justify-content-space-between p-4">
            <div className="subtitle is-6">{region_name}</div>
          </div>
          <figure className="image is-1by1">
            <img src={image} alt={region_name} />
          </figure>
          <div className="card-content p-4">
            <div className="is-flex is-flex-direction-column">
              {/* <p className="has-text-weight-bold is-size-6 is-uppercase">
                Did you know?
              </p> */}
              <div className="is-max-height custom-height is-clipped">
                {areas[0]}
              </div>
            </div>
            <span className="icon-text is-pulled-right pt-6 underline-hover">
              <span></span>
              <span className="icon">
                <i className="fa fa-arrow-right"></i>
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
export default RegionCards;