import React, { SyntheticEvent } from "react";
import { baseUrl } from "../config";
import { IUser } from "../interfaces/user";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function UserPage() {
  const [user, setUser] = React.useState<IUser | null>(null);
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
      await axios.delete(`api/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      navigate("/");
    } catch (e: any) {
      console.log(e.response.data);
    }
  }

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user?.username}</p>
      <input
        type="text"
        value={user?.username}
        onChange={(e) => handleUpdate("username", e.target.value)}
      />

      <p>Email: {user?.email}</p>
      <input
        type="text"
        value={user?.email}
        onChange={(e) => handleUpdate("email", e.target.value)}
      />

      <p>Name: {user?.name}</p>
      <input
        type="text"
        value={user?.name}
        onChange={(e) => handleUpdate("name", e.target.value)}
      />

      {/* <p>Password: {user?.password}</p>
      <input
        type="password"
        value={user?.password}
        onChange={(e) => handleUpdate("password", e.target.value)}
      /> */}

      <button onClick={deleteUser}>Delete User</button>
    </div>
  );
}

export default UserPage;
