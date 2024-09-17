import { Row, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;
const Faqs: React.FC = () => {
  return (
    <Row className='faqs'>
      <Title>
        Frequently Asked <span>Questions</span>
      </Title>
    </Row>
  );
};

export default Faqs;
