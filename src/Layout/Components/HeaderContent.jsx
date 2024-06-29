import { ConfigProvider, Flex, Menu, Typography } from 'antd';
import {
  primaryBlack,
  primaryBrown,
  secondaryBrown,
} from '../../helpers/colors';

const { Title } = Typography;
const HeaderContent = () => {
  const items = [
    {
      key: 'home',
      label: 'Home',
    },
    {
      key: 'about-us',
      label: 'About Us',
    },
    {
      key: 'discover',
      label: 'Discover',
    },
    {
      key: 'services',
      label: 'Services',
    },
    {
      key: 'blog',
      label: 'Blog',
    },
    {
      key: 'sign-up',
      label: 'Sign Up',
    },
    {
      key: 'sign-in',
      label: 'Sign In',
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorText: primaryBrown,
            itemBg: 'transparent',
            fontSize: 16,
            itemSelectedColor: primaryBlack,
            fontFamily: 'DM Sans, sans-serif;',
          },
        },
      }}
    >
      <Flex j align='center'>
        <Title level={2} style={{ margin: 0 }}>
          <span style={{ color: secondaryBrown }}>Chang</span>ia
        </Title>
        <Menu
          className='header-menu'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items}
        />
      </Flex>
    </ConfigProvider>
  );
};

export default HeaderContent;
