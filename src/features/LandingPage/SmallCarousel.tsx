import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { SmallCarouselProps } from "@/utils/smallCarousel";
import SmallProject from "@/components/SmallProject";

export default function SmallCarousel({
  sectionTitle,
  itemList,
}: SmallCarouselProps) {
  return (
    <section className="w-full py-6">
      <div className="flex flex-col max-w-47/50 mx-auto px-6 sm:px-12 items-center">
        <div className="flex self-start mb-2">
          <h2 className="text-2xl font-bold text-[#553a25]">{sectionTitle}</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full max-sm:w-11/12"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {itemList.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
              >
                <SmallProject
                  id={item.id}
                  tags={item.tags}
                  title={item.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="flex bg-white/80 -translate-y-1" />
          <CarouselNext className="flex bg-white/80 -translate-y-1" />
        </Carousel>
      </div>
    </section>
  );
}
