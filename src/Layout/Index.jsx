import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout>
      <Header> Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
