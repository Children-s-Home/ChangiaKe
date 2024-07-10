import { Typography } from 'antd';
import servicesHeader from '../assets/services.jpeg';

const {Title} = Typography  
const ServicesHero = () => {
  return (
    <div className='services-hero'>
      <img src={servicesHeader} />
      <div className='overlay'></div>
      <Title className='title'>Ways to help</Title>
    </div>
  );
}

export default ServicesHero