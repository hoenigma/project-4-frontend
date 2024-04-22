import React from "react";
import RegionCards from "./regioncards";
import { Link } from "react-router-dom";
import { IRegion } from "../interfaces/region";
import { baseUrl } from "../config";

type Regions = null | Array<IRegion>;

function AllRegions() {
  const [regions, setRegions] = React.useState<Regions>(null);
  const [search, setSearch] = React.useState("");
  const [value, setValue] = React.useState("");

  //   Fetch the region data
  React.useEffect(() => {
    async function fetchRegions() {
      const resp = await fetch(`${baseUrl}/regions`);
      const data = await resp.json();
      // console.log(data);
      setRegions(data);
    }
    fetchRegions();
  }, []);

  //   Fetch the region for drop down
  React.useEffect(() => {
    async function fetchRegion() {
      const resp = await fetch(`${baseUrl}/regions?region=${value}`);
      const regionData = await resp.json();
      setRegions(regionData);
    }
    fetchRegion();
  }, [value]);

  // Search bar
  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }
  // Drop down
  function handleRegionChange(e: any) {
    setValue(e.currentTarget.value);
  }

  // Filter function for search and drop doen
  function filterRegions() {
    return regions?.filter((region) => {
      const areaNames = region.areas[0].names;
      console.log(areaNames);
      const areaMatch = areaNames.some((areaName) =>
        areaName.toLowerCase().includes(search.toLowerCase())
      );
      return (
        search === "" ||
        region.region_name.toLowerCase().includes(search.toLowerCase()) ||
        (areaMatch && (value === "" || region.region_name.includes(value)))
      );
    });
  }
  console.log(regions);

  // TODO!!! load spinner/narwhale pic
  // TODO!! Add an create

  return (
      <section className="section backgroundTwo m-0">
        <section className="section is-flex is-flex-direction-column">
          <div className="columns is-multicolumn">
            <div className="container is-widescreen">
              <div className=" searchbar column is-half is-pulled-left">
                <input
                  id="searchBar"
                  className="input is-normal"
                  placeholder="Search"
                  onChange={handleChange}
                  value={search}
                />
              </div>
              <div className="field column is one-quarter">
                <div className="dropdown is-active">
                  <div className="dropdown-trigger">
                    <div className="dropdown is-active">
                      <div className="dropdown-trigger">
                        <div className="select is-hovered">
                          <select
                            name="type"
                            value={value}
                            onChange={handleRegionChange}
                          >
                            <option value={""}>Select Region</option>
                            <option value="South West England">
                              SW England
                            </option>
                            <option value="South East England">
                              SE England
                            </option>
                            <option value="North West England">
                              NW England
                            </option>
                            <option value="North East England">
                              NE England
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns is-multiline">
              {filterRegions()?.map((region) => {
                return <RegionCards key={region.id} {...region} />;
              })}
            </div>
          </div>
        </section>
      </section>
  );
}
export default AllRegions;
