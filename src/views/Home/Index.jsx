import { Flex } from 'antd';
import Hero from './Components/Hero';
import HomeAbout from './Components/HomeAbout';
import HomeServices from './Components/HomeServices';

const Home = () => {
  return (
    <Flex vertical className='home-container'>
      <Hero />
      <HomeAbout />
      <HomeServices />
    </Flex>
  );
};

export default Home;
