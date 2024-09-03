import { Button, Flex, Row, Typography } from 'antd';
import { primaryBrown } from '../../../helpers/colors';
import { services } from '../HomeData/services';
import { v4 as uuidv4 } from 'uuid';

const { Title, Paragraph } = Typography;
const HomeServices = () => {
  return (
    <Row className="home-services">
      <Title className="title">
        Our <span style={{ color: primaryBrown }}>Services</span>
      </Title>
      <Flex gap={50} wrap>
        {services.map((item) => (
          <Flex
            align="center"
            vertical
            key={uuidv4()}
            className="services-card"
            flex={1}
          >
            <Flex vertical>
              <img src={item.icon} alt="" width={64} />
              <Title level={5}> {item.title} </Title>
            </Flex>
            <Paragraph> {item.paragraph}</Paragraph>
            <Button type="primary">Read More</Button>
          </Flex>
        ))}
      </Flex>
    </Row>
  );
};

export default HomeServices;
