import { Flex } from 'antd';
import AboutContent from './Components/AboutContent';
import AboutForm from './Components/AboutForm';

const AboutUs = () => {
  return (
    <Flex vertical className='about-container'>
      <AboutContent />
      <AboutForm />
    </Flex>
  );
};

export default AboutUs;
