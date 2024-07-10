import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, Flex, Typography } from 'antd';
import { gallery } from '../DetailsData/detailsData';

const { Title } = Typography;
const Gallery = () => {
  return (
    <Flex vertical className='gallery-container'>
      <Title>
        <span>Gallery</span>
      </Title>

      <Carousel className='w-full '>
        <CarouselContent>
          {gallery.map((item, index) => (
            <CarouselItem className='sm:basis-1/2 lg:basis-1/3' key={index}>
              <div className=''>
                <div className='   pics  '>
                  <img src={item} alt='' />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Flex>
  );
};

export default Gallery;
