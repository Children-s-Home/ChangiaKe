import { Col, Row } from 'antd';
import ContentFilter from './ContentFilter';
import CentersCard from './CentersCard';

const DiscoverContent = () => {
  return (
    <Row gutter={16} className='discover-content'>
      <Col span={4}>
        <ContentFilter />
      </Col>
      <Col span={20}>
        <CentersCard />
      </Col>
    </Row>
  );
};

export default DiscoverContent;
