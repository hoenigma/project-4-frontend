import { Link, useNavigate } from "react-router-dom";
// import { IUser } from "../interfaces/user";
import logo from "../assests/logo.png";
import "@fortawesome/fontawesome-free/css/all.css";

// interface NavbarProps {
//   user: null | IUser;
//   setUser: Function;
// }

function Navbar() { 
//   console.log("user in the navbar:", user);

  const navigate = useNavigate();

//   function logout() {
//     localStorage.removeItem("token");
//     setUser(null);
//     navigate("/");
//   }

  return (
    <>
      <header>
        <nav className="navbar is-primary">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-start">
                <Link to="/" >
                <img className="image is-64x64" src={logo} alt="wave outline" />
                </Link>
                <Link to="/regions" className="navbar-item has-text-light">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-solid fa-earth-europe"></i>
                    </span>
                    <span>Regions</span>
                  </span>
                </Link>
              </div>
              <div className="navbar-end">
                <Link to="/aboutme" className="navbar-item has-text-light">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-solid fa-face-smile"></i>
                    </span>
                    <span>About Me</span>
                  </span>
                </Link>
                <Link to="/signup" className="navbar-item has-text-light">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-solid fa-right-to-bracket"></i>
                    </span>
                    <span>Sign Up</span>
                  </span>
                </Link>
                <Link to="/login" className="navbar-item has-text-light">
                  <span className="icon-text">
                    <span className="icon">
                      <i className="fa-solid fa-anchor"></i>
                    </span>
                    <span>Login</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;