import Navbar from "../Navbar/Navbar";
import Content from "./Content";
import Contact from "./Contact";
import "./aboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <Content />
      <Contact />
    </div>
  );
};

export default AboutUs;
