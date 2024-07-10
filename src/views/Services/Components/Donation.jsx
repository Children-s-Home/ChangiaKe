import { Col, Flex, Row, Typography } from 'antd';
import React from 'react';
import { donation } from '../data/ServicesData';

const { Paragraph } = Typography;
const Donation = () => {
  return (
    <Flex vertical gap={30} className='services-donation'>
      <Paragraph>
       {donation}
      </Paragraph>
      <Row>
      </Row>
    
    </Flex>
  );
};

export default Donation;
