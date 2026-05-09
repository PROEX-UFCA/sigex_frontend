import {
  Carousel,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";

import BigProject from "@/components/BigProject";
import { useScreenSize } from "@/hooks/useScreenSize";
import { BREAKPOINTS } from "@/lib/breakpoints";
import { useEffect, useState } from "react";
import type { Project } from "@/types";
import { getProjects } from "@/services/projectServices";
import { TriangleAlert } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import recognizeTags from "@/utils/tagRecognition";

const TIME_DELAY = 10000;

/**
 * Exibe um carrossel de tamanho grande de projetos. Possui um timer de 10seg
 * que passa automaticamente os projetos apos o timeout. Caso não consiga
 * receber os projetos da API, exibe uma mensagem de erro.
 *
 * @example
 * <MainCarousel />
 */
export default function MainCarousel() {
  const { width } = useScreenSize();
  const [results, setResults] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjects();
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
      <div className="flex flex-col w-2/3 self-center gap-4">
        <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
          <TriangleAlert className="scale-400 mb-10 self-center" />
          <p className="text-4xl">Não foi possível obter nenhum resultado</p>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full">
      <Carousel
        className=""
        opts={{
          loop: true,
          dragFree: false,
          watchDrag: width < BREAKPOINTS.md,
        }}
        plugins={[Autoplay({ delay: TIME_DELAY })]}
      >
        <CarouselContent>
          {results.map((item, index) => {
            return (
              <CarouselItem key={index}>
                <BigProject
                  id={item.id}
                  title={item.titulo}
                  tags={recognizeTags([item.area_tematica])}
                ></BigProject>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious
          className={`${width > BREAKPOINTS.md ? "" : "hidden"} w-10 h-10 left-5 bg-zinc-100 text-black hover:bg-[#c1c5cc] -translate-y-1`}
        />
        <CarouselNext
          className={`${width > BREAKPOINTS.md ? "" : "hidden"} w-10 h-10 right-5 bg-zinc-100 text-black hover:bg-[#c1c5cc] -translate-y-1`}
        />
      </Carousel>
    </section>
  );
}
