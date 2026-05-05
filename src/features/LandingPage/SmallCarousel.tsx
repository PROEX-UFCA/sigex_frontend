import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import SmallProject from "@/components/SmallProject";
import { useScreenSize } from "@/hooks/useScreenSize";
import { BREAKPOINTS } from "@/lib/breakpoints";
import { useEffect, useState } from "react";
import type { Projeto } from "@/types";
import { searchProjectsByFilter } from "@/services/projectServices";
import { Spinner } from "@/components/ui/spinner";
import { TriangleAlert } from "lucide-react";
import recognizeTags from "@/utils/tagRecognition";

interface SmallCarouselSearchProps {
  sectionTitle: string;
  area_tematica?: string | null;
  tipo_acao?: string | null;
  data_inicio?: string | null;
  data_fim?: string | null;
}

export default function SmallCarousel({
  sectionTitle,
  area_tematica,
  tipo_acao,
  data_inicio,
  data_fim,
}: SmallCarouselSearchProps) {
  const { width } = useScreenSize();
  const [results, setResults] = useState<Projeto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchProjectsByFilter({
        area_tematica: area_tematica ?? undefined,
        tipo_acao: tipo_acao ?? undefined,
        data_inicio: data_inicio ?? undefined,
        data_fim: data_fim ?? undefined,
      });
      setResults(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col w-full items-center gap-2">
        <Spinner className="w-12 h-12 text-gray-400" />
        <p className="text-3xl text-gray-400">Buscando resultados...</p>
      </div>
    );
  }

  if (results.length == 0) {
    return (
      <div className="flex flex-col max-md:w-full md:w-47/50 items-center px-6 self-center gap-4">
        <div className="flex self-start mb-2">
          <h2 className="text-2xl font-bold text-[#553a25]">{sectionTitle}</h2>
        </div>
        <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
          <TriangleAlert className="scale-400 mb-10 self-center" />
          <p className="text-4xl">Não foi possível obter nenhum resultado</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full">
      <div
        className={`flex flex-col max-md:w-full md:w-47/50 mx-auto px-6 items-center`}
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
              watchDrag: width < BREAKPOINTS.md,
              slidesToScroll: 3,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {/* {itemList.map((item, index) => (
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
              ))} */}
              {results.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 max-md:basis-[45%] md:basis-[32%] lg:basis-[23%] xl:basis-[19%] 2xl:basis-[15%]"
                >
                  <SmallProject
                    key={item.id}
                    id={item.id}
                    tags={recognizeTags([item.area_tematica])}
                    title={item.titulo}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className={`flex bg-zinc-100 disabled:bg-zinc-300 text-black disabled:text-gray-600 -translate-y-1 ${width > BREAKPOINTS.md ? "" : "hidden"} rounded-md hover:bg-[#c1c5cc] max-lg:ml-2`}
            />
            <CarouselNext
              className={`flex bg-zinc-100 disabled:bg-zinc-300 text-black disabled:text-gray-600 -translate-y-1 ${width > BREAKPOINTS.md ? "" : "hidden"} rounded-md hover:bg-[#c1c5cc] max-lg:mr-2`}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
