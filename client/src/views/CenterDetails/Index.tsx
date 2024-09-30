import { Flex } from 'antd';
import AboutCenter from './Components/AboutCenter';
import Hero from './Components/Hero';
import Needs from './Components/Needs';
import Leadership from './Components/Leadership';
import Gallery from './Components/Gallery';
import HomeDetailsPage from './Components/NewCenterDeets';

const Details = () => {
  return (
    <Flex vertical className='details-container'>
      <HomeDetailsPage />
    </Flex>
  );
};

export default Details;
