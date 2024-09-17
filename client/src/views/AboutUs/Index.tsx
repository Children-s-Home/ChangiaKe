import { Flex } from 'antd';
import AboutContent from './Components/AboutContent';
import PrinciplesSection from './Components/PrinciplesSection';

const AboutUs = () => {
  return (
    <Flex vertical className='about-container'>
      <AboutContent />
      <PrinciplesSection />
    </Flex>
  );
};

export default AboutUs;
