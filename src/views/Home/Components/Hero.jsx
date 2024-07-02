import {
  Button,
  Col,
  ConfigProvider,
  Form,
  Row,
  Select,
  Typography,
} from 'antd';
import {
  primaryBlack,
  primaryBrown,
  secondaryDullBrown,
} from '../../../helpers/colors';
import { BsSearch } from 'react-icons/bs';

const { Title } = Typography;
const Hero = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Typography: {
            lineHeightHeading1: 1.6,
          },
          Button: {
            colorPrimary: primaryBlack,
            colorPrimaryHover: primaryBrown,
            borderRadiusLG: 50,
            primaryShadow: '2px 2px 8px 0px rgba(0,0,0,0.6)',
          },
          Select: {
            activeBorderColor: primaryBlack,
            hoverBorderColor: primaryBlack,
            borderRadiusLG: 50,
            colorBorder: secondaryDullBrown,
            controlOutlineWidth: 8,
            lineWidth: 2,
          },
        },
      }}
    >
      <Row className='hero'>
        <Col span={12}>
          <Title level={1} className='hero-title'>
            Give back <span>to your community. </span> <br />
            <span> Find a</span> childrens’ home <span> near you</span>
          </Title>
          <Form autoComplete='off'>
            <Form.Item
              name='address'
              rules={[
                {
                  required: true,
                  message: 'Please input your email',
                },
              ]}
            >
              <Select
                suffixIcon={<BsSearch color={secondaryDullBrown} size={18} />}
                size='large'
                placeholder='Enter your address or name of the children’s home'
                style={{ borderWidth: '2px !important', width: '80%' }}
              />
            </Form.Item>
            <Form.Item>
              <Button type='primary' size='large' htmlType='submit'>
                Donate Now
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default Hero;
