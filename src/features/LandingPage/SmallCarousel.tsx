import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import type { SmallCarouselProps } from "@/utils/smallCarousel";
import SmallProject from "@/components/SmallProject";
import { useScreenSize } from "@/hooks/useScreenSize";
import { BREAKPOINTS } from "@/lib/breakpoints";

export default function SmallCarousel({
  sectionTitle,
  itemList,
}: SmallCarouselProps) {
  const { width } = useScreenSize();

  return (
    <section className="w-full py-6">
      <div
        className={`flex flex-col max-md:w-full md:max-w-47/50 mx-auto px-6 items-center`}
      >
        <div className="flex self-start mb-2">
          <h2 className="text-2xl font-bold text-[#553a25]">{sectionTitle}</h2>
        </div>

        <div className="relative w-full">
          {width <= BREAKPOINTS.md ? (
            <div>
              <div className="pointer-events-none absolute -left-1 top-0 h-full w-2 z-10 bg-linear-to-r from-white to-transparent"></div>
              <div className="pointer-events-none absolute -right-1 top-0 h-full w-2 z-10 bg-linear-to-l from-white to-transparent"></div>
            </div>
          ) : (
            <></>
          )}
          <Carousel
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {itemList.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 max-md:basis-[45%] md:basis-[32%] lg:basis-[23%] xl:basis-[19%] 2xl:basis-[15%]"
                >
                  <SmallProject
                    key={item.id}
                    id={item.id}
                    tags={item.tags}
                    title={item.title}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className={`flex bg-white/80 -translate-y-1 ${width > BREAKPOINTS.md ? "" : "hidden"}`}
            />
            <CarouselNext
              className={`flex bg-white/80 -translate-y-1 ${width > BREAKPOINTS.md ? "" : "hidden"}`}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
