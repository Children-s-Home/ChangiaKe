import {  Flex, Row, Typography } from 'antd';
import { volunteering } from '../data/ServicesData';


const { Paragraph,  } = Typography;

const Volunteering = () => {
  return (
    <Flex vertical gap={30} className='services-volunteering'>
      <Paragraph>{volunteering}</Paragraph>
      <Row className='volunteering-card' gutter={[16, 16]}>
      
      </Row>
    </Flex>
  );
};

export default Volunteering;
