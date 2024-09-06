import React from 'react';
import { Row, Col, Typography } from 'antd';
import { blogs } from '../blogData';
import BlogCardSmall from './BlogCard';
import { v4 as uuidv4 } from 'uuid';

const { Title } = Typography;

const Other: React.FC = () => {
  return (
    <Row gutter={[24, 16]} style={{ marginTop: '40px' }}>
      <Col span={24}>
        <Title level={1} style={{ marginBottom: '0px	' }}>
          Other Posts
        </Title>
      </Col>
      {blogs.slice(5, 14).map((item, index) => (
        <Col md={8} sm={12} xs={24} className='trending' key={index}>
          <BlogCardSmall {...item} key={uuidv4()} />
        </Col>
      ))}
    </Row>
  );
};

export default Other;
