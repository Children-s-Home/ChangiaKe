import "./aboutUs.css";
import { Form } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  return null;
}

export default function Contact() {
  return (
    <div className="contact-section">
      <h1 className="title heading-large">
        Contact <span>Us</span>
      </h1>

      <div className="contact-card">
        <h2 className="heading-large"> Write us a message </h2>
        <div className="form-container">
          <Form method="post" className="form" reloadDocument>
            <div className="row">
              <input
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                required
              />

              <input
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                type="number"
                id="phone_number"
                name="phone_number"
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="row">
              <textarea
                rows="4"
                id="message"
                name="message"
                placeholder="Message"
              />
            </div>

            <div className="submit-button">
              <button type="submit" className="submit button-text">
                Submit
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
