import "./register.css";
import { Form, Link, redirect } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  localStorage.setItem("loggedin", true);
  return redirect("/dashboard");
}

export default function Register() {
  return (
    <div className="register-container ">
      <div className="register-image"></div>
      <div className="register-content">
        <h1 className="heading-large">
          Welcome to <span>Chang</span>ia
        </h1>
        <div className="register-form-section">
          <Form method="post" replace>
            <div className="name-row">
              <input
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input type="text" name="last_name" placeholder="Last Name" />
            </div>

            <input type="email" name="email" placeholder="Email" required />
            <input type="tel" name="phone" placeholder="PhoneNumber" />

            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Confirm Password"
              required
            />
            <button className="button-text">Sign Up</button>
          </Form>
          <p className="text-small">
            Already have an account ? <Link to="/logIn">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
