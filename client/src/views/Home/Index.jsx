import { Flex } from 'antd';
import Hero from './Components/Hero';
import HomeServices from './Components/HomeServices';
import Testimonials from './Components/Testimonials';
import Causes from './Components/Causes';
import HomeBlog from './Components/HomeBlog';
import WhoWeAre from './Components/WhoWeAre';
import Onboarding from './Components/Onboarding';

const Home = () => {
  return (
    <Flex vertical className='home-container'>
      <Hero />
      <WhoWeAre />
      <HomeServices />
      <Onboarding />
      <Testimonials />
      <Causes />
      <HomeBlog />
    </Flex>
  );
};

export default Home;
