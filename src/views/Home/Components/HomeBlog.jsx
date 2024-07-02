import { Col, Row, Typography } from "antd"


const {Title } = Typography
const HomeBlog = () => {
  return (
    <Row className='home-blog'>
      <Title>
        Read more articles on our <span>Blog</span>{' '}
      </Title>
      <Col span={14}></Col>
      <Col span={10}></Col>
    </Row>
  );
}

export default HomeBlog
