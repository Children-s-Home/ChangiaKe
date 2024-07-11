import { ConfigProvider, Tabs } from 'antd';
import { primaryBrown } from '../../../helpers/colors/';
import Donation from './Donation';

const ServicesContent = () => {
  const items = [
    {
      key: 'Donation',
      label: 'Donation',
      children: <Donation />,
    },
    {
      key: 'Volunteering',
      label: 'Volunteering',
      children: 'Content of Tab Pane 2',
    },
    {
      key: 'Fundraising',
      label: 'Fundraising',
      children: 'Content of Tab Pane 3',
    },
  ];
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: primaryBrown,
            itemHoverColor: primaryBrown,
            inkBarColor: primaryBrown,
            itemActiveColor: primaryBrown,
            horizontalItemPaddingLG: 5,
          },
        },
      }}
    >
      <Tabs
        className='tabs'
        defaultActiveKey='1'
        animated={true}
        tabBarGutter='12.5em'
        tabBarStyle={{ borderBottom: '0 !important' }}
        size='large'
        indicator={{
          size: (origin) => origin - 50,
          align: 'center',
        }}
        centered
        items={items}
      />
    </ConfigProvider>
  );
};

export default ServicesContent;
