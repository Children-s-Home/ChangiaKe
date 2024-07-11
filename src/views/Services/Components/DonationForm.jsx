import { primaryBlack, primaryBlue, primaryBrown } from '@/helpers/colors';
import {
  Badge,
  Button,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Typography,
} from 'antd';
import { v4 as uuidv4 } from 'uuid';

const { Title, Text } = Typography;

const DonationForm = () => {
  const amounts = [5, 10, 20, 50, 100];

  return (
    <ConfigProvider
      theme={{
        components: {
          Divider: {
            lineWidth: 2,
            colorSplit: '#828282',
            marginLG: 18,
          },
          Radio: {
            colorPrimary: primaryBrown,
            radioSize: 12,
            colorBorder: primaryBlack,
            wrapperMarginInlineEnd: 0,
          },
          Badge: {
            colorBorderBg: 'none',
          },

          Input: {
            colorBorder: 'tranparent',
            colorPrimary: primaryBlack,
            borderRadius: 50,
            colorTextPlaceholder: primaryBlack,
            fontSize: 12,
          },
        },
      }}
    >
      <Form>
        <Flex gap={'middle'} id='donation-input'>
          <Title level={5}> My Donation</Title>
        </Flex>
        <Flex gap={'large'} id='badges'>
          {amounts.map((item) => (
            <Badge
              style={{ cursor: 'pointer' }}
              color={primaryBlue}
              key={uuidv4()}
              count={`$ ${item}`}
              overflowCount={100000000}
            />
          ))}
        </Flex>
        <Divider />
        <Flex vertical id='frequency'>
          <Title level={5}>Frequency</Title>
          <Form.Item
            name={'frequency'}
            style={{ marginBottom: 0 }}
            initialValue={1}
          >
            <Radio.Group className='radio-group'>
              <Flex gap={50}>
                <Radio value={1}>One Time</Radio>
                <Radio value={2}>Monthly</Radio>
                <Radio value={3}>Annualy</Radio>
              </Flex>
            </Radio.Group>
          </Form.Item>
        </Flex>
        <Divider />
        <Flex id='details-form' vertical>
          <Title level={5} style={{ marginBottom: 10 }}>
            Personal Details
          </Title>
          <Row gutter={20}>
            <Col span={12}>
              <Form.Item
                name={'firstName'}
                rules={[
                  {
                    required: true,
                    message: 'Kindly enter your first name',
                  },
                ]}
              >
                <Input placeholder={'First Name'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={'lastName'}
                rules={[
                  {
                    required: true,
                    message: 'Kindly enter your Last name',
                  },
                ]}
              >
                <Input placeholder={'Last Name'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={'email'}
                rules={[
                  {
                    required: true,
                    message: 'Kindly enter your email',
                  },
                ]}
              >
                <Input type='email' placeholder={'email'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={'country'}
                rules={[
                  {
                    required: false,
                    message: 'Kindly enter your first name',
                  },
                ]}
              >
                <Input placeholder={'Country'} />
              </Form.Item>
            </Col>
          </Row>
        </Flex>
        <Divider />

        <Flex vertical id='specify-donation'>
          <Title level={5}>Specify Donation</Title>
          <Form.Item name={'specify'} initialValue={3}>
            <Radio.Group>
              <Flex wrap gap={20}>
                <Radio value={3}>Any Children’s home</Radio>
                <Radio value={2}>Elderly Homes</Radio>

                <Radio value={1}>Girls only home</Radio>
                <Radio value={7}>Boys only home</Radio>
              </Flex>
            </Radio.Group>
          </Form.Item>
        </Flex>
        <Form.Item>
          <Row justify={'center'}>
            <Button
              style={{ width: '50%', borderRadius: 50 }}
              type='primary'
              size='large'
              htmlType='submit'
            >
              Submit
            </Button>
          </Row>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
};

export default DonationForm;
