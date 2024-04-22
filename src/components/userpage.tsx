import React, { SyntheticEvent } from "react";
import { baseUrl } from "../config";
import { IUser } from "../interfaces/user";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

interface NavbarProps {
  user: null | IUser;
  setUser: Function;
}

function UserPage({ user, setUser }: NavbarProps) {
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUser() {
      const token = localStorage.getItem("token");
      const resp = await fetch(`${baseUrl}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userDataText = await resp.text();
      console.log(userDataText);
      const userData = JSON.parse(userDataText);

      setUser(userData);
      console.log("this is the", userData);
    }
    fetchUser();
  }, []);

  async function handleUpdate(field: string, newValue: string) {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${baseUrl}/user`,
        { [field]: newValue },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // After updating, fetch user again to reflect changes
      fetchUser();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  }

  async function fetchUser() {
    // Define fetchUser in the component's scope
    try {
      const resp = await fetch(`${baseUrl}/user`);
      const userData = await resp.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  async function deleteUser(e: SyntheticEvent) {
    try {
      const token = localStorage.getItem("token");
      console.log(token);
      localStorage.removeItem("token");
      setUser(null);

      navigate("/");

      await axios.delete(`api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  return (
    <section className="section background m-0" style={{ height: "100vh" }}>
      <div className="box user">
        <h1 className="title">User Profile</h1>
        <div>
          <div>
        <p className="subtitle mb-0 has-text-weight-bold">Current Username: {user?.username}</p>
        <p> Change Username: </p>
        <input className = "mb-3"
          type="text"
          value={user?.username}
          onChange={(e) => handleUpdate("username", e.target.value)}
        />
        </div>

        <div>
        <p className="subtitle mb-0 has-text-weight-bold">Current Name: {user?.name}</p>
        <p>Change Name:</p>
        <input className = "mb-3"
          type="text"
          value={user?.name}
          onChange={(e) => handleUpdate("name", e.target.value)}
        />
        </div>

        <div>
        <p className="subtitle mb-0 has-text-weight-bold">Current Email: {user?.email}</p>
        <p>Change Email:</p>
        <input
          type="text"
          value={user?.email}
          onChange={(e) => handleUpdate("email", e.target.value)}
        />
         </div>

        {/* <p>Password: {user?.password}</p>
      <input
        type="password"
        value={user?.password}
        onChange={(e) => handleUpdate("password", e.target.value)}
      /> */}
        <div>
          <button onClick={deleteUser} className="button is-danger mt-3">
            Delete
          </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserPage;
