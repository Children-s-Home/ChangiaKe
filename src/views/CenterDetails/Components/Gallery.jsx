import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, Flex, Typography } from "antd"

const {Title} = Typography
const Gallery = () => {
  return (
    <Flex vertical className='gallery-container'>
      <Title>
        <span>Gallery</span>
      </Title>
      <Carousel className='w-full max-w-xs'>
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className='p-1'>
                <Card>
                  <div className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Flex>
  );
}

export default Gallery