import { Button } from '@/components/ui/button';

const JoinUs = () => {
  return (
    <section className='w-full  py-8  p-18 bg-[#e78124]'>
      <div className='container px-4 md:px-6 text-center'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-4'>
          Join Us in Making a Difference
        </h2>
        <p className='mx-auto max-w-[700px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-8'>
          Your support can help us build a brighter future for children in
          Kenya. Together, we can create lasting change in our communities.
        </p>
        <div className='flex flex-col sm:flex-row justify-center gap-4'>
          <Button className='bg-white text-[#e78124] hover:bg-gray-100'>
            Donate Now
          </Button>
          <Button
            variant='outline'
            className='bg-transparent text-white border-white hover:bg-white hover:text-[#e78124]'
          >
            Volunteer With Us
          </Button>
        </div>
      </div>
    </section>
  );
};
export default JoinUs;
