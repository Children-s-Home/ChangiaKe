import { Button, Card, Col, Flex, Row, Tooltip, Typography } from 'antd';
import { CiLocationOn } from 'react-icons/ci';
import { v4 as uuidv4 } from 'uuid';
import { centers } from '../discoverData';
import useRouting from '../../../hooks/useRouting';
import { HiOutlineExternalLink } from 'react-icons/hi';

const { Text, Title, Paragraph } = Typography;

const CentersCard = () => {
  const { navigateTo } = useRouting();
  return (
    <Row className='cards' gutter={[20, 20]}>
      {centers.map((item) => (
        <Col key={uuidv4()} lg={12} xl={8} md={12} sm={24}>
          <Card
            data-status={item.button}
            cover={<img alt='example' src={`/images/${item.img}.jpg`} />}
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
              <Tooltip title='See details'>
                <Button
                  type='Link'
                  onClick={() => navigateTo('/details/1')}
                  style={{ fontSize: 16 }}
                >
                  <HiOutlineExternalLink />
                </Button>
              </Tooltip>
            </Flex>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default CentersCard;
