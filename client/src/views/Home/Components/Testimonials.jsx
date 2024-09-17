import {
  Avatar,
  Carousel,
  Col,
  ConfigProvider,
  Flex,
  Row,
  Typography,
} from 'antd';
import { testimonials } from '../HomeData/testimonials';
import { v4 as uuiv4 } from 'uuid';
import { secondaryDullBrown } from '../../../helpers/colors';

const { Title, Text, Paragraph } = Typography;
const Testimonials = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            arrowSize: 24,
          },
        },
      }}
    >
      <Row className='testimonials' style={{ marginTop: '30px' }}>
        <Title>
          <span>Testimonials </span>from the volunteers
        </Title>

        <Col>
          <Carousel className='carousel' infinite autoplay autoplaySpeed={7000}>
            {testimonials.map((item) => (
              <div key={uuiv4()}>
                <Flex justify='center'>
                  <Row align='middle' gutter={24} className='testimonial-card'>
                    <Col flex='230px'>
                      <Avatar src={item.avatar} size={200} />
                    </Col>
                    <Col flex='auto'>
                      <Flex vertical>
                        <Paragraph>{item.paragraph}</Paragraph>
                        <Text
                          style={{
                            color: secondaryDullBrown,
                            fontWeight: 600,
                          }}
                        >
                          {item.name}
                        </Text>
                      </Flex>
                    </Col>
                  </Row>
                </Flex>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default Testimonials;
