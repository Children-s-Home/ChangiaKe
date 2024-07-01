import {
  Button,
  Col,
  ConfigProvider,
  Flex,
  Form,
  Input,
  Row,
  Typography,
} from 'antd';
import { useSelector } from 'react-redux';
import { primaryBlack, primaryBlue, primaryBrown } from '../../helpers/colors';

const { Text, Title } = Typography;

const FooterContent = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: primaryBrown,
            colorPrimaryHover: primaryBlack,
          },
        },
      }}
    >
      <Row>
        <Col span={isMobile ? 24 : 16}></Col>
        <Col span={isMobile ? 24 : 8} className='newsletter'>
          <Flex vertical>
            <Title level={4} style={{ fontWeight: '500', color: primaryBlue }}>
              Sign Up for the Newsletter
            </Title>
            <Text>
              This newsletter gives you a reminder of the events you reserved
              and the upcoming events that may interest you.
            </Text>
            <Form
              autoComplete='off'
              style={{ display: 'flex', gap: '10px', marginTop: '10px' }}
            >
              <Form.Item
                style={{ flex: '1' }}
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                  {
                    type: 'email',
                    message: 'Enter a valid email',
                  },
                ]}
              >
                <Input placeholder='Enter your email' />
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Flex>
          <Flex></Flex>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default FooterContent;
