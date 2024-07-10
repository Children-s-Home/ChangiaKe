import { Button, Card, Col, Flex, Row, Typography } from 'antd';
import { CiLocationOn } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import { centers } from '../discoverData';

const { Text, Title, Paragraph } = Typography;

const CentersCard = () => {
  return (
    <Row className='cards' gutter={[20, 20]}>
      {centers.map((item) => (
        <Col
          key={uuidv4()}
          lg={12}
          xl={8}
          md={12}
          sm={24}
        >
          <Card
            data-status={item.button}
            cover={
              <img
                alt='example'
                src={`/images/Search Results/${item.img}.png`}
              />
            }
            className='causes-card'
            bordered={false}
          >
            <Title level={5}> {item.name} </Title>
            <Text>
              <CiLocationOn /> {item.location}
            </Text>

            <Paragraph>{item.text}</Paragraph>
            <Flex justify='space-between'>
              <Button type='primary' className='donate'>
                {item.button}
              </Button>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CentersCard;
