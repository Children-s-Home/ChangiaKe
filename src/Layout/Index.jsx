import { ConfigProvider, Layout } from 'antd';
import HeaderContent from './Components/HeaderContent';
const { Header, Footer, Content } = Layout;

const AppLayout = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Roboto, sans-serif;',
        },
      }}
    >
      <Layout className='layout-container'>
        <Header className='header'>
          <HeaderContent />
        </Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
