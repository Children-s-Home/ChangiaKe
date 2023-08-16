function Contact() {
  return (
    <div className="contact-section">
      <h1 className="title">
        Contact <span>Us</span>
      </h1>

      <div className="contact-card">
        <h2>Write us a message</h2>
        <div className="form-container">
          <form action="submit_form.php" method="post" className="form">
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
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
