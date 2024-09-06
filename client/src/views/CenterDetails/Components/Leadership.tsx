import { Avatar, Col, Flex, Row, Typography } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import { primaryBrown } from '../../../helpers/colors';
import { leaders } from '../DetailsData/about';

const { Title, Text } = Typography;
const Leadership = () => {
  return (
    <Flex vertical className='leadership'>
      <Title>
        Our
        <span> Leadership</span>
      </Title>
      <Row gutter={[16, 16]}>
        {leaders.map((item) => (
          <Col className='leader' lg={8} xs={24} sm={8} md={8} key={uuidv4()}>
            <Avatar
              size={{ xs: 200, sm: 120, md: 150, lg: 150, xl: 200, xxl: 200 }}
              src={item.img}
            />
            <Title level={5}> {item.name} </Title>
            <Text color={primaryBrown}> {item.designation} </Text>
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default Leadership;
