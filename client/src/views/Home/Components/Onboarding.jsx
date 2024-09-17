import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Link as LinkIcon,
  UserPlus,
  ShieldCheck,
  Bell,
  Laptop,
} from 'lucide-react';
const Onboarding = () => {
  return (
    <section id='onboarding' className='w-full py-2  '>
      <div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
          Join Us
        </h2>
        <p className='text-xl text-center mb-12 max-w-2xl mx-auto'>
          Onboarding your children's home is quick and easy. Follow these simple
          steps to become part of our supportive community.
        </p>
        <div className='flex flex-col md:flex-row justify-between items-center md:items-stretch space-y-4 md:space-y-0'>
          <Card className='w-full md:w-48 text-center'>
            <CardContent className='p-4'>
              <LinkIcon className='h-10 w-10 mx-auto mb-2 text-[#e78124]' />
              <h3 className='text-lg font-bold mb-1'>1. Click to Join</h3>
              <p className='text-sm'>Start by clicking our signup link.</p>
            </CardContent>
          </Card>
          <div className='flex items-center justify-center md:w-8'>
            <ArrowRight className='h-5 w-5 text-gray-400' />
          </div>
          <Card className='w-full md:w-48 text-center'>
            <CardContent className='p-4'>
              <UserPlus className='h-10 w-10 mx-auto mb-2 text-[#e78124]' />
              <h3 className='text-lg font-bold mb-1'>2. Sign Up</h3>
              <p className='text-sm'>Fill out our simple registration form.</p>
            </CardContent>
          </Card>
          <div className='flex items-center justify-center md:w-8'>
            <ArrowRight className='h-5 w-5 text-gray-400' />
          </div>
          <Card className='w-full md:w-48 text-center'>
            <CardContent className='p-4'>
              <ShieldCheck className='h-10 w-10 mx-auto mb-2 text-[#e78124]' />
              <h3 className='text-lg font-bold mb-1'>3. Verification</h3>
              <p className='text-sm'>We'll review your application.</p>
            </CardContent>
          </Card>
          <div className='flex items-center justify-center md:w-8'>
            <ArrowRight className='h-5 w-5 text-gray-400' />
          </div>
          <Card className='w-full md:w-48 text-center'>
            <CardContent className='p-4'>
              <Bell className='h-10 w-10 mx-auto mb-2 text-[#e78124]' />
              <h3 className='text-lg font-bold mb-1'>4. Notification</h3>
              <p className='text-sm'>Receive account confirmation.</p>
            </CardContent>
          </Card>
          <div className='flex items-center justify-center md:w-8'>
            <ArrowRight className='h-5 w-5 text-gray-400' />
          </div>
          <Card className='w-full md:w-48 text-center'>
            <CardContent className='p-4'>
              <Laptop className='h-10 w-10 mx-auto mb-2 text-[#e78124]' />
              <h3 className='text-lg font-bold mb-1'>5. Get Started</h3>
              <p className='text-sm'>Log in and start using our platform.</p>
            </CardContent>
          </Card>
        </div>
        <div className='text-center mt-12'>
          <Button className='bg-[#e78124] text-xl text-white hover:bg-[#c66a1e]'>
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
