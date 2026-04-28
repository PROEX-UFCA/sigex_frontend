import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import type { ProjectDataValues } from "@/utils/globals";

import BigProject from "@/components/BigProject";

const TIME_DELAY = 10000;

interface MainCarouselProps {
  itemList: ProjectDataValues[];
}

export default function MainCarousel({ itemList }: MainCarouselProps) {
  return (
    <section className="w-full">
      <Carousel
        className=""
        opts={{ loop: true, dragFree: false, watchDrag: false }}
        plugins={[Autoplay({ delay: TIME_DELAY })]}
      >
        <CarouselContent>
          {itemList.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <BigProject
                  key={item.id}
                  id={item.id}
                  tags={item.tags}
                  title={item.title}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10 left-5 bg-gray-300 text-gray-600 hover:bg-[#c1c5cc] -translate-y-1" />
        <CarouselNext className="w-10 h-10 right-5 bg-gray-300 text-gray-600 hover:bg-[#c1c5cc] -translate-y-1" />
      </Carousel>
    </section>
  );
}
