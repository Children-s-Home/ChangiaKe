import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';
import { Typography } from 'antd';
const { Link } = Typography;
const ContactPage = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        <section id='contact-form' className='w-full py-8 '>
          <div>
            <div className='grid gap-10  md:gap-16 lg:grid-cols-2'>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Get in Touch
                </h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  Fill out the form below, and we'll get back to you as soon as
                  possible.
                </p>
                <Card>
                  <CardContent className='p-6'>
                    <form className='space-y-4'>
                      <div className='space-y-2'>
                        <label
                          htmlFor='name'
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Name
                        </label>
                        <Input id='name' placeholder='Enter your name' />
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='email'
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Email
                        </label>
                        <Input
                          id='email'
                          placeholder='Enter your email'
                          type='email'
                        />
                      </div>
                      <div className='space-y-2'>
                        <label
                          htmlFor='message'
                          className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                        >
                          Message
                        </label>
                        <Textarea
                          id='message'
                          placeholder='Enter your message'
                        />
                      </div>
                      <Button className='w-full bg-[#e78124] text-white hover:bg-[#c66a1e]'>
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              <div className='space-y-4'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Contact Information
                </h2>
                <p className='text-gray-500 dark:text-gray-400'>
                  You can also reach out to us directly using the following
                  contact details:
                </p>
                <Card>
                  <CardContent className='p-6 space-y-4'>
                    <div className='flex items-center space-x-4'>
                      <Mail className='h-6 w-6 text-[#e78124]' />
                      <span>info@changiake.org</span>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <Phone className='h-6 w-6 text-[#e78124]' />
                      <span>+254 715 776141</span>
                    </div>
                    <div className='flex items-center space-x-4'>
                      <MapPin className='h-6 w-6 text-[#e78124]' />
                      <span>Nairobi, Kenya</span>
                    </div>
                  </CardContent>
                </Card>
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe
                    src='https://www.google.com/maps/embed/v1/search?q=Nairobi%2C%20Kenya&key=AIzaSyB1NmHGrnCFgeyiSQrReTyIZrFmhvut73k'
                    width='600'
                    height='450'
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading='lazy'
                    className='w-full h-full rounded-lg'
                  ></iframe>
                </div>
                <div className='flex space-x-4 justify-center'>
                  <Link href='#' className='text-gray-600 hover:text-[#e78124]'>
                    <Facebook className='h-6 w-6' />
                    <span className='sr-only'>Facebook</span>
                  </Link>
                  <Link href='#' className='text-gray-600 hover:text-[#e78124]'>
                    <Twitter className='h-6 w-6' />
                    <span className='sr-only'>Twitter</span>
                  </Link>
                  <Link href='#' className='text-gray-600 hover:text-[#e78124]'>
                    <Instagram className='h-6 w-6' />
                    <span className='sr-only'>Instagram</span>
                  </Link>
                  <Link href='#' className='text-gray-600 hover:text-[#e78124]'>
                    <Linkedin className='h-6 w-6' />
                    <span className='sr-only'>LinkedIn</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='faq' className='w-full py-12  bg-gray-50'>
          <div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
              Frequently Asked Questions
            </h2>
            <Accordion
              type='single'
              collapsible
              className='w-full max-w-3xl mx-auto'
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger>
                  How can I donate to Changia NGO?
                </AccordionTrigger>
                <AccordionContent>
                  You can donate through our website, by mail, or by phone. We
                  accept various payment methods including credit cards, PayPal,
                  and bank transfers. For more information, please visit our
                  Donation page or contact our support team.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>
                  What percentage of my donation goes directly to helping
                  children?
                </AccordionTrigger>
                <AccordionContent>
                  We're proud to say that 85% of all donations go directly to
                  our programs supporting children. The remaining 15% is used
                  for administrative costs and fundraising efforts to ensure we
                  can continue our mission effectively.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>
                  How can I volunteer with Changia NGO?
                </AccordionTrigger>
                <AccordionContent>
                  We have various volunteering opportunities available, both
                  locally and internationally. You can start by filling out our
                  volunteer application form on our website. We'll then contact
                  you with opportunities that match your skills and interests.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-4'>
                <AccordionTrigger>
                  Is my donation tax-deductible?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, Changia NGO will be a registered non-profit organization.
                  All donations made are tax-deductible to the full extent
                  allowed by law. We'll provide you with a receipt for your
                  records.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-5'>
                <AccordionTrigger>
                  How can I stay updated on your activities and impact?
                </AccordionTrigger>
                <AccordionContent>
                  You can stay informed about our activities and impact by
                  subscribing to our newsletter, following us on social media,
                  or checking our blog regularly. We also publish an annual
                  report that provides a comprehensive overview of our work and
                  achievements.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
