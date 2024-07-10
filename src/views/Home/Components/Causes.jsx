import { Button, Card, Flex, Row, Typography } from 'antd';
import { causes } from '../HomeData/causes';
import { v4 as uuidv4 } from 'uuid';
import { CiLocationOn } from 'react-icons/ci';

const { Title, Text, Paragraph } = Typography;
const Causes = () => {
  return (
    <Row className='causes'>
      <Title>
        <span>Causes </span>
        you should look out for
      </Title>
      <Flex wrap className='cards' gap={60}>
        {causes.slice(0, 3).map((item) => (
          <Card
            key={uuidv4()}
            cover={<img alt='example' src={item.pic} />}
            className='causes-card'
            bordered={false}
          >
            <Text>
              <CiLocationOn /> {item.location}
            </Text>
            <Title level={5}>{item.title}</Title>
            <Paragraph>{item.paragraph}</Paragraph>
            <Flex justify='space-between'>
              <Button type='primary' className='donate'>
                Donate
              </Button>
              <Button type='primary'>Read More</Button>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Row>
  );
};

export default Causes;
