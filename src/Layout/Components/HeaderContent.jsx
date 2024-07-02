import { ConfigProvider, Dropdown, Flex, Menu, Typography } from 'antd';
import {
  primaryBlack,
  primaryBrown,
  secondaryBrown,
} from '../../helpers/colors';
import { useSelector } from 'react-redux';
import { RxHamburgerMenu } from 'react-icons/rx';
import { navItems } from '../layoutData';

const { Title } = Typography;
const HeaderContent = () => {
  const isMobile = useSelector((state) => state.layout.isMobile.value);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            colorText: primaryBrown,
            itemBg: 'transparent',
            fontSize: 16,
            itemSelectedColor: primaryBlack,
            fontFamily: 'DM Sans, sans-serif',
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
            items={navItems}
          />
        ) : (
          <Dropdown
            className='dropdown'
            trigger={['click']}
            overlayClassName='dropdown-overlay'
            menu={{
              items: navItems,
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
