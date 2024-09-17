import { Col, Typography } from 'antd';
import { principles } from '../aboutData/about';
import { v4 as uuidv4 } from 'uuid';
import { primaryBrown } from '../../../helpers/colors';

const { Paragraph, Title } = Typography;
const PrinciplesSection = () => {
  return principles.map((item) => (
    <Col key={uuidv4()} style={{ marginTop: '30px' }}>
      <Title style={{ textAlign: 'center' }}>
        {item.title.split(' ')[0]}
        <span style={{ color: primaryBrown }}> {item.title.split(' ')[1]}</span>
      </Title>
      <Paragraph>{item.paragraph}</Paragraph>
    </Col>
  ));
};

export default PrinciplesSection;
