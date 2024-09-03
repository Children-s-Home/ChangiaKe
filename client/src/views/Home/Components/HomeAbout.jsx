import { Col, Typography } from 'antd';
import { about } from '../HomeData/about';
import { v4 as uuidv4 } from 'uuid';
import { primaryBrown } from '../../../helpers/colors';

const { Paragraph, Title } = Typography;
const HomeAbout = () => {
  return about.map((item) => (
    <Col key={uuidv4()}>
      <Title>
        {item.title.split(' ')[0]}
        <span style={{ color: primaryBrown }}> {item.title.split(' ')[1]}</span>
      </Title>
      <Paragraph>{item.paragraph}</Paragraph>
    </Col>
  ));
};

export default HomeAbout;
