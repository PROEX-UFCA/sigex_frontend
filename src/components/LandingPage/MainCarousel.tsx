import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import TagsArea from "@/components/Tags";
import { useNavigate } from "react-router";
import type { ProjectDataValues } from "@/utils/globals";

import culturaImg from "@/assets/cultura.png";

const TIME_DELAY = 10000;

interface MainCarouselProps {
  itemList: ProjectDataValues[];
}

export default function MainCarousel({ itemList }: MainCarouselProps) {
  const navigate = useNavigate();

  return (
    <section className="w-full">
      <Carousel
        className=""
        opts={{ loop: true, dragFree: false, watchDrag: false }}
        plugins={[Autoplay({ delay: TIME_DELAY })]}
      >
        <CarouselContent>
          {itemList.map(
            (
              item,
              __, // __ = index, embora não esteja usando agora
            ) => (
              <CarouselItem>
                <div
                  onClick={() => navigate(`/projects/${item.id}`)}
                  className="cursor-pointer bg-cover bg-center rounded-3xl min-h-125 flex flex-col justify-end relative"
                  style={{backgroundImage: `url(${culturaImg})`}}
                >
                  <div className="absolute bottom-0 left-0 right-0 h-45 bg-black/20 blur-md rounded-b-3xl"></div>
                  <div className="flex flex-col relative z-10 p-10 w-full text-gray-50 mx-5 gap-2">
                    <span className="flex text-5xl font-bold">
                      Título do projeto
                    </span>
                    <span className="flex text-left opacity-80">
                      Tempor esse labore consectetur quis dolor laborum magna
                      nulla dolore. Consequat laborum esse minim et ullamco id
                      enim culpa irure. Exercitation nulla duis pariatur anim ea
                      nostrud eu dolore proident eiusmod. In sunt reprehenderit
                      irure do do. Voluptate velit exercitation ea aute nisi.
                      Culpa elit Lorem fugiat Lorem sunt reprehenderit.
                    </span>
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
                      size="lg"
                    />
                  </div>
                </div>
              </CarouselItem>
            ),
          )}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10 left-5 bg-gray-300 text-gray-600 hover:bg-[#c1c5cc] -translate-y-1" />
        <CarouselNext className="w-10 h-10 right-5 bg-gray-300 text-gray-600 hover:bg-[#c1c5cc] -translate-y-1" />
      </Carousel>
    </section>
  );
}
