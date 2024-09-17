import {
  CheckCircle,
  DollarSign,
  Handshake,
  Heart,
  Home,
  Rocket,
  Target,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const WhoWeAre = () => {
  return (
    <section id='about' className='w-full py-12 md:py-14 lg:py-22 bg-gray-50'>
      <div>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
          Who We Are
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-start'>
          <Card className='h-full'>
            <CardContent className='p-6 space-y-4'>
              <h3 className='text-2xl font-bold'>Our Mission</h3>
              <p className='text-lg text-gray-600'>
                Changia NGO is a new organization dedicated to improving the
                lives of children in need. We aim to partner with children's
                homes across the country to provide essential resources,
                support, and opportunities for growth.
              </p>
              <div className='space-y-2'>
                <div className='flex items-center space-x-2'>
                  <Heart className='h-6 w-6 text-[#e78124]' />
                  <span className='text-xl font-semibold'>Compassion</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Handshake className='h-6 w-6 text-[#e78124]' />
                  <span className='text-xl font-semibold'>Collaboration</span>
                </div>
                <div className='flex items-center space-x-2'>
                  <DollarSign className='h-6 w-6 text-[#e78124]' />
                  <span className='text-xl font-semibold'>Impact</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className='space-y-6'>
            <Card className='bg-white'>
              <CardContent className='p-6'>
                <h3 className='text-2xl font-bold mb-4'>Our Aspirations</h3>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='bg-[#e78124] text-white rounded-lg p-4 flex flex-col items-center text-center'>
                    <Target className='h-8 w-8 mb-2' />
                    <h4 className='text-lg font-semibold mb-1'>100+</h4>
                    <p className='text-sm'>
                      Children's Homes Supported by 2025
                    </p>
                  </div>
                  <div className='bg-black text-white rounded-lg p-4 flex flex-col items-center text-center'>
                    <DollarSign className='h-8 w-8 mb-2' />
                    <h4 className='text-lg font-semibold mb-1'>$1M+</h4>
                    <p className='text-sm'>Fundraising Goal for First Year</p>
                  </div>
                  <div className='bg-white border-2 border-[#e78124] rounded-lg p-4 flex flex-col items-center text-center'>
                    <Users className='h-8 w-8 mb-2 text-[#e78124]' />
                    <h4 className='text-lg font-semibold mb-1 text-[#e78124]'>
                      5,000+
                    </h4>
                    <p className='text-sm'>Volunteers to Engage in 3 Years</p>
                  </div>
                  <div className='bg-gray-100 rounded-lg p-4 flex flex-col items-center text-center'>
                    <Home className='h-8 w-8 mb-2' />
                    <h4 className='text-lg font-semibold mb-1'>10+</h4>
                    <p className='text-sm'>Regions to Expand to by 2026</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className='bg-gradient-to-r from-[#e78124] to-[#c66a1e] text-white'>
              <CardContent className='p-6'>
                <div className='flex items-center space-x-4'>
                  <Rocket className='h-12 w-12 flex-shrink-0' />
                  <div>
                    <h4 className='text-xl font-bold mb-2'>Join Our Journey</h4>
                    <p className='text-sm'>
                      Be part of our mission from the very beginning. Together,
                      we can make a lasting impact on children's lives.
                    </p>
                  </div>
                </div>
                <Button className='mt-4 w-full bg-white text-[#e78124] hover:bg-gray-100'>
                  Get Involved Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
