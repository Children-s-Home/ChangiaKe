import { Flex } from 'antd';
import AboutCenter from './Components/AboutCenter';
import Hero from './Components/Hero';
import Needs from './Components/Needs';

const Details = () => {
  return (
    <Flex vertical className='details-container'>
      <Hero />
      <AboutCenter />
      <Needs/>
    </Flex>
  );
};

export default Details;
