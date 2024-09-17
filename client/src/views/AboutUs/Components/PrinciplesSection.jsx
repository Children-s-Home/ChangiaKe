import { principles } from '../aboutData/about';

import { Card, CardContent } from '@/components/ui/card';
import { v4 as uuidv4 } from 'uuid';

const PrinciplesSection = () => {
  return (
    <section id='mission-vision' className='w-full p-18 bg-gray-50'>
      <div className='grid gap-10  md:gap-16 lg:grid-cols-2'>
        {principles.map((item) => (
          <Card key={uuidv4()}>
            <CardContent className='p-6'>
              <h2 className='text-2xl font-bold mb-4 flex items-center'>
                {item.icon}
                {item.title}
              </h2>
              <p className='text-gray-600'>{item.paragraph}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PrinciplesSection;
