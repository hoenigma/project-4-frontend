import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Signup from "./components/signup";
import Login from "./components/login";
import AboutMe from "./components/aboutme";
import AllRegions from "./components/showregions"

function App() {
  const [user, setUser] = useState(null);
  async function fetchUser() {
    const token = localStorage.getItem("token");
    const resp = await axios.get(`api/user`, {
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
    </Routes>
  </Router>
  )
}

export default App
