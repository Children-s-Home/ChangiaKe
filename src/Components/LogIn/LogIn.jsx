import { Form, Link } from "react-router-dom";
import "./logIn.css";

export async function action ({request}) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
    return null;
}

const LogIn = () => {
  return (
    <div className="logIn-container">
      <div className="logIn-image"></div>
      <div className="logIn-content">
        <h1 className="heading-large">
          Welcome to <span>Chang</span>ia
        </h1>
        <Form method="post" >
          <input type="email" placeholder="Email" name="email" required />
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <button className="button-text">Sign In</button>
        </Form>
        <div className="other-options">
          <p className="text-small">
            <span>OR</span> Login with
          </p>
          <div className="login-icon-links">
            <a href="">
              <img src="/Icons/logos_facebook.png" alt="" />
            </a>
            <a href="">
              <img src="/Icons/flat-color-icons_google.png" alt="" />
            </a>
          </div>
        </div>
        <p className="text-small ">
          Don’t have an account?{" "}
          <Link className="register-link" to="/register">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
