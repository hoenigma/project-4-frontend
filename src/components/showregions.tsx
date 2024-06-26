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
      console.log(data);
      setRegions(data);
    }
    fetchRegions();
  }, []);

  //   Fetch the region for drop down
  React.useEffect(() => {
    async function fetchRegion() {
      const resp = await fetch(`${baseUrl}/regions?region_name=${value}`);
      const regionData = await resp.json();
      setRegions(regionData);
      // console.log(regions);
    }
    fetchRegion();
  }, [value]);

  // Search bar
  function handleChange(e: any) {
    setSearch(e.currentTarget.value);
  }
  // Drop down
  function handleRegionChange(e: any) {
    setValue(e.currentTarget.value)
    console.log(value);
  }

  React.useEffect(() => {
  console.log(value);
}, [value]);

  // Filter function for search and drop doen
  function filterRegions() {
    return regions?.filter((region) => {
      const areaNames = region.areas[0].names;
      // console.log(areaNames);
      const areaMatch = areaNames.some((areaName) =>
        areaName.toLowerCase().includes(search.toLowerCase())
      );
      return (
        (search === "" ||
        region.region_name.toLowerCase().includes(search.toLowerCase()) ||
        (areaMatch)) && 
        (value === "" || region.region_name.includes(value))
      );
    });
  }
  // console.log(regions);

  // TODO!!! load spinner/narwhale pic
  // TODO!! Add an create

  return (
    <>
    <section className="section backgroundTwo m-0">
      
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
              <div className="select is-hovered">
                <select
                  name="region_name"
                  value={value}
                  onChange={handleRegionChange}
                >
                  <option value={""}>Select Region</option>
                  <option value="England" disabled>England</option>
                  <option value="South West England">SW England</option>
                  <option value="South East England">SE England</option>
                  <option value="North West England">NW England</option>
                  <option value="North East England">NE England</option>
                  <option value="Ireland" disabled>Ireland</option>
                  <option value="Northern Ireland">Northern Ireland</option>
                  <option value="Republic Of Ireland">Republic Of Ireland</option>
                  <option value="Scotland" disabled>Scotland</option>
                  <option value="North Scotland">North Scotland</option>
                  <option value="South Scotland">South Scotland</option>
                </select>
              </div>
            </div>
          </div>
        </div>
       <div className="container" style={{ minHeight: "calc(100vh - 200px)" }}>
          <div className="columns is-multiline">
            {filterRegions()?.map((region) => (
              <RegionCards key={region.id} {...region} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default AllRegions;
