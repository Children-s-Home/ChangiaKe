import { ConfigProvider, Dropdown, Flex, Menu, Typography } from 'antd';
import {
  primaryBlack,
  primaryBrown,
  secondaryBrown,
} from '../../helpers/colors';
import { useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';

const { Title } = Typography;
const HeaderContent = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);
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
      <Flex align='center' style={{ height: '100%' }}>
        <Title level={2} style={{ margin: 0 }}>
          <span style={{ color: secondaryBrown }}>Chang</span>ia
        </Title>
        {!isMobile ? (
          <Menu
            className='header-menu'
            mode='horizontal'
            defaultSelectedKeys={['2']}
            items={items}
          />
        ) : (
          <Dropdown
            className='dropdown'
            trigger={['click']}
            overlayClassName='dropdown-overlay'
            menu={{
              items,
              selectable: true,
              defaultSelectedKeys: ['home'],
            }}
            arrow={{ pointAtCenter: true }}
            placement='bottomRight'
          >
            <RxHamburgerMenu fontSize={24} />
          </Dropdown>
        )}
      </Flex>
    </ConfigProvider>
  );
};

export default HeaderContent;
