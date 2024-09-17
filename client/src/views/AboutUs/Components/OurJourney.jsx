import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { v4 as uuidv4 } from 'uuid';
import { journey } from '../aboutData/about';

const OurJourney = () => {
  return (
    <section id='journey' className='w-full py-12 '>
      <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8'>
        Our Journey
      </h2>
      <div className='max-w-3xl mx-auto'>
        <Accordion type='single' collapsible className='w-full'>
          {journey.map((item) => (
            <AccordionItem key={uuidv4()} value={item.value}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default OurJourney;
