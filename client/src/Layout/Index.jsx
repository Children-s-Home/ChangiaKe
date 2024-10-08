import { ConfigProvider, Layout } from 'antd';
import HeaderContent from './Components/HeaderContent';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
const { Header, Footer, Content } = Layout;
import { resize } from '../redux/Slices/NavSlice';
import FooterContent from './Components/FooterContent';
import { Outlet } from 'react-router-dom';
import { primaryBlack, primaryBrown } from '../helpers/colors';
import FooterNew from './Components/FooterNew';

const AppLayout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(resize(window.innerWidth <= 768));
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'Roboto, sans-serif;',
          fontSize: 16,
          lineHeight: 1.8,
        },
        components: {
          Button: {
            colorPrimary: primaryBrown,
            colorPrimaryHover: primaryBlack,
            borderRadius: 50,
          },
        },
      }}
    >
      <Layout className='layout-container'>
        <Header className='header'>
          <HeaderContent />
        </Header>
        <Content className='content'>
          <Outlet />
        </Content>
        <Footer className='footer'>
          <FooterNew />
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default AppLayout;
