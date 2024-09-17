import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Heart,
  Users,
  DollarSign,
  CreditCard,
  Phone,
  HandHeart,
  UserPlus,
  Megaphone,
  ShieldCheck,
  Info,
  Bitcoin,
} from 'lucide-react';
import { Typography } from 'antd';

const { Link } = Typography;
const ServicesNew = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-16 flex items-center'>
        <Link className='flex items-center justify-center' href='/'>
          <Heart className='h-6 w-6 text-[#e78124]' />
          <span className='ml-2 text-lg font-bold'>Changia</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/'
          >
            Home
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/about'
          >
            About
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/services'
          >
            Services
          </Link>
          <Link
            className='text-sm font-medium hover:underline underline-offset-4'
            href='/contact'
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-[#e78124]'>
          <div className='container px-4 md:px-6'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white text-center'>
              Our Services
            </h1>
            <p className='mt-4 text-xl text-white text-center max-w-[700px] mx-auto'>
              Discover how you can make a difference with Changia. Whether
              through donations, volunteering, or fundraising, your support can
              change lives.
            </p>
          </div>
        </section>

        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <Tabs defaultValue='donation' className='w-full'>
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger
                  value='donation'
                  className='flex items-center justify-center'
                >
                  <HandHeart className='w-4 h-4 mr-2' />
                  Donation
                </TabsTrigger>
                <TabsTrigger
                  value='volunteering'
                  className='flex items-center justify-center'
                >
                  <UserPlus className='w-4 h-4 mr-2' />
                  Volunteering
                </TabsTrigger>
                <TabsTrigger
                  value='fundraising'
                  className='flex items-center justify-center'
                >
                  <Megaphone className='w-4 h-4 mr-2' />
                  Fundraising
                </TabsTrigger>
              </TabsList>
              <TabsContent value='donation'>
                <Card>
                  <CardContent className='p-6'>
                    <h2 className='text-2xl font-bold mb-4 flex items-center'>
                      <HandHeart className='w-6 h-6 mr-2 text-[#e78124]' />
                      Make a Donation
                    </h2>
                    <p className='text-gray-600 mb-6'>
                      Your donation can make a real difference in the lives of
                      children in Kenya. Every contribution, no matter how
                      small, helps us provide education, healthcare, and support
                      to those who need it most.
                    </p>
                    <form className='space-y-4'>
                      <div>
                        <Label htmlFor='amount'>Donation Amount (KES)</Label>
                        <Input
                          id='amount'
                          type='number'
                          placeholder='Enter amount'
                        />
                      </div>
                      <div>
                        <Label>Payment Method</Label>
                        <RadioGroup
                          defaultValue='card'
                          onValueChange={setPaymentMethod}
                        >
                          <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='card' id='card' />
                            <Label htmlFor='card' className='flex items-center'>
                              <CreditCard className='w-4 h-4 mr-2' />
                              Card
                            </Label>
                          </div>
                          <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='paypal' id='paypal' />
                            <Label
                              htmlFor='paypal'
                              className='flex items-center'
                            >
                              <DollarSign className='w-4 h-4 mr-2' />
                              PayPal
                            </Label>
                          </div>
                          <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='mpesa' id='mpesa' />
                            <Label
                              htmlFor='mpesa'
                              className='flex items-center'
                            >
                              <Phone className='w-4 h-4 mr-2' />
                              M-Pesa
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>
                      {paymentMethod === 'card' && (
                        <>
                          <div>
                            <Label htmlFor='cardNumber'>Card Number</Label>
                            <Input
                              id='cardNumber'
                              type='text'
                              placeholder='1234 5678 9012 3456'
                            />
                          </div>
                          <div className='grid grid-cols-2 gap-4'>
                            <div>
                              <Label htmlFor='expiry'>Expiry Date</Label>
                              <Input
                                id='expiry'
                                type='text'
                                placeholder='MM/YY'
                              />
                            </div>
                            <div>
                              <Label htmlFor='cvv'>CVV</Label>
                              <Input id='cvv' type='text' placeholder='123' />
                            </div>
                          </div>
                        </>
                      )}
                      {paymentMethod === 'mpesa' && (
                        <div className='space-y-4'>
                          <div>
                            <Label htmlFor='phoneNumber'>
                              M-Pesa Phone Number
                            </Label>
                            <Input
                              id='phoneNumber'
                              type='tel'
                              placeholder='0712345678'
                            />
                          </div>
                          <div>
                            <Label htmlFor='tillNumber'>
                              M-Pesa Till Number
                            </Label>
                            <div className='flex items-center space-x-2'>
                              <Input
                                id='tillNumber'
                                type='text'
                                value='123456'
                                readOnly
                                className='bg-gray-100'
                              />
                              <Button
                                type='button'
                                variant='outline'
                                onClick={() =>
                                  navigator.clipboard.writeText('123456')
                                }
                              >
                                Copy
                              </Button>
                            </div>
                            <p className='text-sm text-gray-500 mt-1'>
                              Use this Till Number to make your donation via
                              M-Pesa
                            </p>
                          </div>
                        </div>
                      )}
                      <Button type='submit' className='w-full'>
                        Donate Now
                      </Button>
                    </form>
                    <div className='mt-6 text-sm text-gray-500 flex items-start'>
                      <ShieldCheck className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                      <p>
                        Your donation is secure and encrypted. By donating, you
                        agree to our{' '}
                        <Link
                          href='/terms'
                          className='text-[#e78124] hover:underline'
                        >
                          Terms of Service
                        </Link>{' '}
                        and{' '}
                        <Link
                          href='/privacy'
                          className='text-[#e78124] hover:underline'
                        >
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                    <div className='mt-4 text-sm text-gray-500 flex items-start'>
                      <Bitcoin className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                      <p>
                        Crypto donations coming soon! We're working on accepting
                        cryptocurrency donations to provide more options for our
                        supporters.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='volunteering'>
                <Card>
                  <CardContent className='p-6'>
                    <h2 className='text-2xl font-bold mb-4 flex items-center'>
                      <UserPlus className='w-6 h-6 mr-2 text-[#e78124]' />
                      Volunteer with Us
                    </h2>
                    <p className='text-gray-600 mb-6'>
                      Join our team of dedicated volunteers and make a direct
                      impact on the lives of children in Kenya. We offer various
                      volunteering opportunities, from teaching and mentoring to
                      organizing events and fundraising activities.
                    </p>
                    <h3 className='text-xl font-semibold mb-2'>
                      Volunteer Opportunities:
                    </h3>
                    <ul className='list-disc list-inside mb-6 text-gray-600'>
                      <li>Teaching and tutoring</li>
                      <li>Healthcare support</li>
                      <li>Event organization</li>
                      <li>Administrative assistance</li>
                      <li>Fundraising activities</li>
                    </ul>
                    <p className='text-gray-600 mb-6'>
                      Whether you can commit to a long-term engagement or just a
                      few hours a week, your time and skills can make a
                      significant difference in our mission.
                    </p>
                    <Button className='w-full'>Apply to Volunteer</Button>
                    <div className='mt-6 text-sm text-gray-500 flex items-start'>
                      <Info className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                      <p>
                        All volunteers must complete a background check and
                        training program. Learn more about our{' '}
                        <Link
                          href='/volunteer-policy'
                          className='text-[#e78124] hover:underline'
                        >
                          Volunteer Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value='fundraising'>
                <Card>
                  <CardContent className='p-6'>
                    <h2 className='text-2xl font-bold mb-4 flex items-center'>
                      <Megaphone className='w-6 h-6 mr-2 text-[#e78124]' />
                      Start Fundraising
                    </h2>
                    <p className='text-gray-600 mb-6'>
                      Become a champion for children in Kenya by starting your
                      own fundraising campaign. Whether it's a sponsored run, a
                      bake sale, or a social media challenge, your efforts can
                      help us reach more children in need.
                    </p>
                    <h3 className='text-xl font-semibold mb-2'>
                      Fundraising Ideas:
                    </h3>
                    <ul className='list-disc list-inside mb-6 text-gray-600'>
                      <li>Sponsored sports events</li>
                      <li>Community bake sales</li>
                      <li>Birthday fundraisers</li>
                      <li>Social media challenges</li>
                      <li>Charity auctions</li>
                    </ul>
                    <p className='text-gray-600 mb-6'>
                      We'll provide you with all the support and materials you
                      need to make your fundraising campaign a success. Every
                      shilling raised goes directly to supporting our programs
                      for children in Kenya.
                    </p>
                    <Button className='w-full'>Start Your Fundraiser</Button>
                    <div className='mt-6 text-sm text-gray-500 flex items-start'>
                      <ShieldCheck className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                      <p>
                        Changia is committed to transparency. View our{' '}
                        <Link
                          href='/financial-reports'
                          className='text-[#e78124] hover:underline'
                        >
                          Financial Reports
                        </Link>{' '}
                        to see how funds are used.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className='bg-gray-100 py-12'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <Link className='flex items-center justify-center' href='/'>
              <Heart className='h-6 w-6 text-[#e78124]' />
              <span className='ml-2 text-lg font-bold'>Changia</span>
            </Link>
            <div className='flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4'>
              <div className='flex items-center space-x-2'>
                <Users className='h-4 w-4 text-[#e78124]' />
                <span className='text-sm'>Nairobi, Kenya</span>
              </div>
              <div className='flex items-center space-x-2'>
                <DollarSign className='h-4 w-4 text-[#e78124]' />
                <span className='text-sm'>info@changia.org</span>
              </div>
              <div className='flex items-center space-x-2'>
                <Phone className='h-4 w-4 text-[#e78124]' />
                <span className='text-sm'>+254 123 456 789</span>
              </div>
            </div>
            <p className='text-sm text-gray-500'>
              © 2024 Changia. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesNew;
