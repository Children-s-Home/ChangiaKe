import { Flex } from 'antd';
import Hero from './Components/Hero';
import HomeAbout from './Components/HomeAbout';

const Home = () => {
  return (
    <Flex vertical className='home-container'>
      <Hero />
      <HomeAbout />
    </Flex>
  );
};

export default Home;
