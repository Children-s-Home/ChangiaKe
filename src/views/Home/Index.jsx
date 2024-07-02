import { Flex } from 'antd';
import Hero from './Components/Hero';
import HomeAbout from './Components/HomeAbout';
import HomeServices from './Components/HomeServices';
import Testimonials from './Components/Testimonials';
import Causes from './Components/Causes';

const Home = () => {
  return (
    <Flex vertical className='home-container'>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <Testimonials />
      <Causes />
    </Flex>
  );
};

export default Home;
