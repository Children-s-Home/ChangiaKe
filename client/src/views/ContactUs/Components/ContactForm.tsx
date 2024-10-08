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
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
const { Title } = Typography;
const { TextArea } = Input;
const ContactForm = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Input: {
            borderRadiusLG: 5,
          },
        },
      }}
    >
      <Row className='contact-form'>
        <Title>
          Contact <span>Us</span>
        </Title>
        <Form className='form'>
          <Title level={3}>Write us a message</Title>
          <Row gutter={24}>
            <Col md={12} xs={24}>
              <Form.Item
                name='first_name'
                rules={[
                  {
                    required: true,
                    message: 'Please input your first name',
                  },
                ]}
              >
                <Input size='large' placeholder='First Name' />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                name='last_name'
                rules={[
                  {
                    required: true,
                    message: 'Please input your last name',
                  },
                ]}
              >
                <Input size='large' placeholder='Last Name' />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                name='email'
                rules={[
                  {
                    required: true,
                    message: 'Please input your email',
                  },
                  {
                    type: 'email',
                    message: 'Please input a valid email',
                  },
                ]}
              >
                <Input size='large' placeholder='Email' />
              </Form.Item>
            </Col>
            <Col md={12} xs={24}>
              <Form.Item
                name='phone_number'
                rules={[
                  {
                    type: 'number',
                    message: 'Please input a valid number',
                  },
                ]}
              >
                <Input size='large' placeholder='Phone Number' />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name='message'
                rules={[
                  {
                    required: true,
                    message: 'Please input a message',
                  },
                ]}
              >
                <TextArea rows={4} placeholder='Message' size='large' />
              </Form.Item>
            </Col>
          </Row>
          <Flex className='button'>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                SUBMIT
              </Button>
            </Form.Item>
          </Flex>
        </Form>
        <Flex align='center' gap={'large'} className='contact-options'>
          <Title></Title>
          <Title level={5}>
            <Flex gap={'small'} align='center'>
              <FaPhoneAlt /> +254715776141
            </Flex>
          </Title>

          <Title level={5}>
            <Flex gap={'small'} align='center'>
              <MdEmail /> info@changiake.org
            </Flex>
          </Title>

          <Title level={5}>
            <Flex gap={'small'} align='center'>
              <FaLocationDot /> Nairobi, Kenya
            </Flex>
          </Title>
        </Flex>
      </Row>
    </ConfigProvider>
  );
};

export default ContactForm;
