import { Flex } from 'antd';
import AboutCenter from './Components/AboutCenter';
import Hero from './Components/Hero';
import Needs from './Components/Needs';
import Leadership from './Components/Leadership';
import Gallery from './Components/Gallery';

const Details = () => {
  return (
    <Flex vertical className='details-container'>
      <Hero />
      <AboutCenter />
      <Needs/>
      <Leadership />
      <Gallery />
    </Flex>
  );
};

export default Details;
