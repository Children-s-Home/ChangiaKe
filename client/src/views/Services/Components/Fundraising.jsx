import { Flex, Row, Typography } from 'antd';
import { fundraising } from '../data/ServicesData';

const { Paragraph } = Typography;

const Fundraising = () => {
  return (
    <Flex vertical gap={30} className='services-fundraising'>
      <Paragraph>{fundraising}</Paragraph>
      <Row className='fundraising-card' gutter={[16, 16]}></Row>
    </Flex>
  );
};

export default Fundraising;
