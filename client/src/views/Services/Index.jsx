import { Flex } from 'antd';
import ServicesHero from './Components/ServicesHero';
import ServicesNew from './Components/NewServices';

const Services = () => {
  return (
    <Flex vertical className='services-container'>
      <ServicesHero />
      <ServicesNew />
    </Flex>
  );
};

export default Services;
