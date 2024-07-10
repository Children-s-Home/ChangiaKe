import { Col, Row } from 'antd';
import ContentFilter from './ContentFilter';
import CentersCard from './CentersCard';

const DiscoverContent = () => {
  return (
    <Row gutter={[16,16]} className='discover-content'>
      <Col md={6} lg={4} sm={8}>
        <ContentFilter />
      </Col>
      <Col md={18} lg={20} sm={16} style={{padding: 0}} >
        <CentersCard />
      </Col>
    </Row>
  );
};

export default DiscoverContent;
