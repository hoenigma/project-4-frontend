import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import AboutMe from "./components/aboutme";
import AllRegions from "./components/showregions"
import OneRegion from "./components/oneregion";
import Projects from "./components/projects";
import AddProject from "./components/addproject";
import UpdateProject from "./components/updateprojects";

function App() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`http://localhost:5173/api/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    console.log(resp.data);
    setUser(resp.data);
  }
  //if there is a token (so if user logged in) it will fetch the user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) fetchUser();
  }, []);

  return (
  <Router>
    <Navbar user={user} setUser={setUser} />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signup" element= {<Signup/>} />
      <Route path ="/login" element = {<Login fetchUser={fetchUser}/>} />
      <Route path ="/aboutme" element ={<AboutMe/>}/>
      <Route path ="/regions" element ={<AllRegions/>}/>
      <Route path ="/region/:regionid" element ={<OneRegion user={user}/>}/>
      <Route path ="/projects/:regionid" element ={<Projects user={user}/>}/>
      <Route path ="/addproject/:regionid" element ={<AddProject user={user}/>}/>
      <Route path ="updateprojects/:projectid" element={<UpdateProject/>}/>

    </Routes>
  </Router>
  )
}

export default App
