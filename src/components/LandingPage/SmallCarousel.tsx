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

export default function SmallCarousel({
  sectionTitle,
  itemList,
}: SmallCarouselProps) {
  const navigate = useNavigate();

  return (
    <section className="w-full py-6">
      <div className="max-w-47/50 mx-auto px-6 sm:px-12">
        <div className="flex justify-start mb-2">
          <h2 className="text-2xl font-bold text-[#553a25]">{sectionTitle}</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
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
                  style={{ backgroundImage: `url(${techImg})` }}
                >
                  <p className="flex font-bold text-black text-xl leading-tight">
                    {item.title}
                  </p>
                  <TagsArea
                    tags={[
                      {
                        tagType: "Tecnologia",
                      },
                      {
                        tagType: "Cultura",
                      },
                      {
                        tagType: "Ensino",
                      },
                    ]}
                    size={(getWindowSize().width > BREAKPOINTS.medium) ? "lg":"md"}
                  ></TagsArea>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="flex -left-4 md:-left-12 bg-white/80 -translate-y-1" />
          <CarouselNext className="flex -right-4 md:-right-12 bg-white/80 -translate-y-1" />
        </Carousel>
      </div>
    </section>
  );
}
