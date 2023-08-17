import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="links">
        <div className="column">
          <Link className="footer-links" to="/DonationVolunteeringFundraising">
            How to help
          </Link>

          <Link className="footer-links" to="/SearchResults">
            Find a home
          </Link>

          <Link className="footer-links" to="/Blog">
            Blog
          </Link>

          <Link className="footer-links" to="/">
            Home
          </Link>
        </div>

        <div className="column">
          <a href="">Cookies Policy</a>
          <a href="">Privacy Notice</a>
          <a href="">Terms and Conditions</a>
          <a href="">Report</a>
        </div>
      </div>

      <div className="newsletter">
        <div className="newsletter-content">
          <p>Sign Up for the Newsletter</p>
          <p>
            This newsletter gives you a reminder of the events you reserved and
            the upcoming events that may interest you.
          </p>
          <div className="email-form">
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <button value="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
