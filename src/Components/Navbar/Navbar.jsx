import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1>
          <a href="/">
            Chang<span className="ia">ia</span>
          </a>
        </h1>
      </div>

      <div className="options">
        <ul className="menu-items">
          <li>
            <Link className="nav-links" to="/AboutUs">
              About us
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/DonationVolunteeringFundraising">
              Discover
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/SearchResults">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav-links" to="/Blog">
              Blog
            </Link>
          </li>
          <li className="sign-up button">
            <Link className="nav-links" to="/Register">
              Sign Up
            </Link>
          </li>
          <li className="sign-in button">
            <Link className="nav-links" to="/LogIn">
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
