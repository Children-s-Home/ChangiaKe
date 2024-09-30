import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { homeData } from '../DetailsData/homeData';

const HomeDetailsPage = () => {
  return (
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='relative h-96 w-full'>
        <img
          src="/placeholder.svg?height=600&width=1200&text=Sunshine+Children's+Home"
          alt={homeData.name}
          layout='fill'
          objectFit='cover'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <h1 className='text-4xl md:text-6xl font-bold text-white text-center'>
            {homeData.name}
          </h1>
        </div>
      </div>

      <div className='container mx-auto px-4 py-8'>
        {/* Overview Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-[rgb(231,129,36)] mb-4'>
            About Us
          </h2>
          <p className='text-gray-700 mb-4'>{homeData.overview}</p>
          <h3 className='text-xl font-semibold text-[rgb(231,129,36)] mb-2'>
            Our Mission
          </h3>
          <p className='text-gray-700 mb-4'>{homeData.mission}</p>
          <h3 className='text-xl font-semibold text-[rgb(231,129,36)] mb-2'>
            Our Programs
          </h3>
          <div className='grid md:grid-cols-2 gap-4'>
            {homeData.programs.map((program, index) => (
              <Card key={index}>
                <CardContent className='p-4'>
                  <h4 className='font-semibold mb-2'>{program.name}</h4>
                  <p className='text-sm text-gray-600'>{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Volunteer Opportunities and Current Needs Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-[rgb(231,129,36)] mb-4'>
            Get Involved
          </h2>
          <div className='grid md:grid-cols-2 gap-8'>
            <div>
              <h3 className='text-xl font-semibold mb-4'>
                Volunteer Opportunities
              </h3>
              <Accordion type='single' collapsible className='w-full'>
                {homeData.volunteerOpportunities.map((opportunity, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{opportunity.title}</AccordionTrigger>
                    <AccordionContent>
                      {opportunity.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button className='mt-4 bg-[rgb(231,129,36)] hover:bg-[rgb(211,109,16)]'>
                Apply to Volunteer
              </Button>
            </div>
            <div>
              <h3 className='text-xl font-semibold mb-4'>Current Needs</h3>
              <Accordion type='single' collapsible className='w-full'>
                {homeData.currentNeeds.map((need, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger>{need.item}</AccordionTrigger>
                    <AccordionContent>{need.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <Button className='mt-4 bg-[rgb(231,129,36)] hover:bg-[rgb(211,109,16)]'>
                Donate Items
              </Button>
            </div>
          </div>
        </section>

        {/* Impact Stories and Testimonials Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-[rgb(231,129,36)] mb-4'>
            Our Impact
          </h2>
          <Tabs defaultValue='stories'>
            <TabsList>
              <TabsTrigger value='stories'>Impact Stories</TabsTrigger>
              <TabsTrigger value='testimonials'>Testimonials</TabsTrigger>
            </TabsList>
            <TabsContent value='stories'>
              <div className='grid md:grid-cols-2 gap-6'>
                {homeData.impactStories.map((story, index) => (
                  <Card key={index}>
                    <CardContent className='p-6'>
                      <h3 className='font-bold text-lg mb-2'>
                        {story.name}'s Story
                      </h3>
                      <p className='text-sm text-gray-600 mb-2'>
                        Age: {story.age}
                      </p>
                      <p className='mb-2'>
                        <strong>Background:</strong> {story.background}
                      </p>
                      <p className='mb-2'>
                        <strong>Achievements:</strong> {story.achievements}
                      </p>
                      <blockquote className='italic mb-2'>
                        "{story.quote}"
                      </blockquote>
                      <p className='text-sm'>{story.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value='testimonials'>
              <div className='grid md:grid-cols-2 gap-6'>
                {homeData.testimonials.map((testimonial, index) => (
                  <Card key={index}>
                    <CardContent className='p-6'>
                      <p className='italic mb-4'>"{testimonial.text}"</p>
                      <p className='font-bold'>{testimonial.name}</p>
                      <p className='text-sm text-gray-600 mb-2'>
                        {testimonial.role}
                      </p>
                      <p className='text-sm'>
                        <strong>Impact:</strong> {testimonial.impact}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Accreditations and Partnerships Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-[rgb(231,129,36)] mb-4'>
            Accreditations & Partnerships
          </h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div>
              <h3 className='text-xl font-semibold text-[rgb(231,129,36)] mb-2'>
                Accreditations
              </h3>
              <ul className='list-disc list-inside text-gray-700'>
                {homeData.accreditations.map((accreditation, index) => (
                  <li key={index} className='mb-2'>
                    <strong>{accreditation.name}</strong>:{' '}
                    {accreditation.description}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-xl font-semibold text-[rgb(231,129,36)] mb-2'>
                Partnerships
              </h3>
              <ul className='list-disc list-inside text-gray-700'>
                {homeData.partnerships.map((partner, index) => (
                  <li key={index} className='mb-2'>
                    <strong>{partner.name}</strong>: {partner.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className='mb-12'>
          <h2 className='text-3xl font-bold text-[rgb(231,129,36)] mb-4'>
            Contact Us
          </h2>
          <div className='flex flex-col md:flex-row gap-4 items-start'>
            <div className='flex items-center text-gray-700'>
              <Phone className='w-6 h-6 mr-2' />
              <span>{homeData.contact.phone}</span>
            </div>
            <div className='flex items-center text-gray-700'>
              <Mail className='w-6 h-6 mr-2' />
              <span>{homeData.contact.email}</span>
            </div>
            <div className='flex items-center text-gray-700'>
              <MapPin className='w-6 h-6 mr-2' />
              <span>{homeData.contact.address}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeDetailsPage;
