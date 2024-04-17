import React, { SyntheticEvent, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function AddProject({}) {
  const navigate = useNavigate();
  const { regionid } = useParams();

  const [formData, setFormData] = useState({
    country: "",
    region_name: "",
    info: "",
    image: "",
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
}