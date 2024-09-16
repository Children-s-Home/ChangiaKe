import { Flex } from 'antd';
import ContactForm from './Components/ContactForm';
import Faqs from './Components/Faqs';

const ContactUs = () => {
  return (
    <Flex vertical className='contact-container'>
      <ContactForm />
      <Faqs />
    </Flex>
  );
};

export default ContactUs;
