import { Col, Row, Typography } from 'antd';
import aboutPic from '../assets/about.png';
import { about } from '../aboutData/about';
import { useSelector } from 'react-redux';

const { Title, Paragraph } = Typography;
const AboutContent = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  return (
    <Row className='about-us-content'>
      <Title>
        About <span>us</span>
      </Title>
      <Row className='paragraph'>
        <Col className='p' span={isMobile ? 24 : 12}>
          <Paragraph style={{ fontSize: 16 }}>{about}</Paragraph>
        </Col>
        <Col
          span={isMobile ? 24 : 11}
          className='photo'
          style={{ backgroundImage: `url(${aboutPic}` }}
        />
      </Row>
    </Row>
  );
};

export default AboutContent;
