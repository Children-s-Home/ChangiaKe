import { Button } from '@/components/ui/button';
import { Typography } from 'antd';
import { Twitter, Instagram, Linkedin, Facebook } from 'lucide-react';
const { Link } = Typography;
const FooterNew = () => {
  return (
    <footer className=' py-8 bg-gray-100 '>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-bold mb-4'>About Us</h3>
            <p className='text-sm text-gray-600'>
              Changia NGO is dedicated to improving the lives of children in
              need through fundraising, volunteering, and donations.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <Link
                  href='/'
                  className='text-sm text-gray-600 hover:text-[#e78124]'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href='/about-us'
                  className='text-sm text-gray-600 hover:text-[#e78124]'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/services'
                  className='text-sm text-gray-600 hover:text-[#e78124]'
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href='/contact-us'
                  className='text-sm text-gray-600 hover:text-[#e78124]'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
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
              <Link href='#' className='text-gray-600 hover:text-[#e78124]'>
                <Facebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className='text-lg font-bold mb-4'>Newsletter</h3>
            <form className='space-y-2'>
              <input
                type='email'
                placeholder='Your email'
                className='w-full p-2 border border-gray-300 rounded-md'
              />
              <Button className='w-full bg-[#e78124] text-white hover:bg-[#c66a1e]'>
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className='mt-8 pt-8 border-t border-gray-200'>
          <p className='text-center text-xs text-gray-600'>
            © 2024 Changia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
