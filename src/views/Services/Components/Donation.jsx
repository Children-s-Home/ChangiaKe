import { Col, Flex, Row, Typography } from 'antd';
import { donation } from '../data/ServicesData';
import DonationForm from './DonationForm';
import Options from './Options';

const { Paragraph, Title } = Typography;

const Donation = () => {
  return (
    <Flex vertical gap={30} className='services-donation'>
      <Paragraph>{donation}</Paragraph>
      <Row className='donation-card' gutter={[16, 16]}>
        <Col md={14} sm={24} className='action-section'>
          <DonationForm />
        </Col>
        <Col
          md={10}
          sm={24}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Title level={5}> Our donation options</Title>

          <Options />
        </Col>
      </Row>
    </Flex>
  );
};

export default Donation;
