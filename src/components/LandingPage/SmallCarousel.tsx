import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TagsArea from "@/components/Tags";
import { useNavigate } from "react-router";

import techImg from "@/assets/tecnologia.png";

import type { SmallCarouselProps } from "@/utils/smallCarousel";
import { getWindowSize } from "@/hooks/screen";
import { BREAKPOINTS } from "@/utils/constants";
import { DEFAULT_PROJECT_IMAGES } from "@/utils/images";

export default function SmallCarousel({
  sectionTitle,
  itemList,
}: SmallCarouselProps) {
  const navigate = useNavigate();

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
                <div
                  onClick={() => navigate(`/projects/${item.id}`)}
                  className="cursor-pointer bg-cover bg-center w-full h-48 md:h-52 lg:h-60 rounded-xl p-4 flex flex-col justify-end shadow-sm gap-2"
                  style={{
                    backgroundImage: `url(${DEFAULT_PROJECT_IMAGES[item.tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES][Number(item.id) % DEFAULT_PROJECT_IMAGES[item.tags[0].tagType as keyof typeof DEFAULT_PROJECT_IMAGES].length]})`,
                  }}
                >
                  <p className="flex font-bold text-black text-xl leading-tight">
                    {item.title}
                  </p>
                  <TagsArea
                    tags={item.tags}
                    size={
                      getWindowSize().width > BREAKPOINTS.medium ? "lg" : "sm"
                    }
                  ></TagsArea>
                </div>
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
