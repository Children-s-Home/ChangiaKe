import { Flex } from "antd"
import ServicesHero from "./Components/ServicesHero";
import ServicesContent from "./Components/ServicesContent";

const Services = () => {
  return <Flex vertical className='services-container'>
    <ServicesHero />
    <ServicesContent />
  </Flex>;
}

export default Services