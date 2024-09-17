import { Button } from '@/components/ui/button';
import { Code, Mail } from 'lucide-react';

import { v4 as uuidv4 } from 'uuid';
import { team } from '../aboutData/about';

const MeetOurTeam = () => {
  return (
    <section id='team' className='  w-full p-18'>
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12'>
        Meet Our Team
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-start'>
        {team.map((item) => (
          <div key={uuidv4()} className='flex flex-col items-center'>
            <div className='relative w-32 h-32 rounded-full overflow-hidden mb-6'>
              <img
                src='/placeholder.svg?height=200&width=200'
                alt={item.name}
                className='object-cover w-full h-full'
              />
            </div>
            <h3 className='text-2xl font-bold mb-2'>{item.name}</h3>
            <p className='text-[#e78124] mb-4'>{item.title}</p>
            <div className='flex space-x-4'>
              <Button variant='outline' size='icon'>
                <Mail className='h-4 w-4' />
              </Button>
              <a href={item.link} rel='noreferrer' target='_blank'>
                <Button variant='outline' size='icon'>
                  {item.icon}
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurTeam;
