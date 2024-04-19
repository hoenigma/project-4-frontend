
import React, { SyntheticEvent }  from "react";
import { baseUrl } from "../config";
import { IUser } from "../interfaces/user";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


function UserPage(){
const [User, updateUser] = React.useState<IUser | null>(null);
const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUser() {
      const resp = await fetch(`${baseUrl}/user}`);
      const userDataText = await resp.text();
      console.log(userDataText);
      const userData = JSON.parse(userDataText);

      updateUser(userData);
      console.log("this is the", userData);
    }
    fetchUser();
  }, []);

    async function deleteUser(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      await axios.delete(`api/user/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  return(
    <h1>ITS WORKING</h1>
  )

}

export default UserPage