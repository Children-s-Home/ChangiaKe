import { Typography } from "antd";
import detailsHeader from "../assets/AboutUsBanner.png";

const { Title } = Typography;
const Hero = () => {
  return (
    <div className="hero">
      <img src={detailsHeader} />
      <div className="overlay"></div>
      <Title className="title">Hope Children&apos;s Home</Title>
    </div>
  );
};

export default Hero;
