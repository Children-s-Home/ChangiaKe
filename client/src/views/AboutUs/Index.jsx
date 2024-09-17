import { Flex } from 'antd';
import AboutContent from './Components/AboutContent';
import PrinciplesSection from './Components/PrinciplesSection';
import MeetOurTeam from './Components/MeetOurTeam';
import OurJourney from './Components/OurJourney';
import JoinUs from './Components/JoinUs';

const AboutUs = () => {
  return (
    <Flex gap={'large'} vertical className='about-container'>
      <AboutContent />
      <PrinciplesSection />
      <MeetOurTeam />
      <OurJourney />
      <JoinUs />
    </Flex>
  );
};

export default AboutUs;
