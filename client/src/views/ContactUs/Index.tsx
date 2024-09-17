import { Flex } from 'antd';
import ContactForm from './Components/ContactForm';
import Faqs from './Components/Faqs';
import ContactPage from './Components/ContactUsWhole';

const ContactUs = () => {
  return (
    <Flex vertical className='contact-container'>
      {/* <ContactForm /> */}
      {/* <Faqs /> */}
      <ContactPage />
    </Flex>
  );
};

export default ContactUs;
