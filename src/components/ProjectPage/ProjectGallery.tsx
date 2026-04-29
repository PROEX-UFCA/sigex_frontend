import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import type { ProjectImages } from "@/utils/project";

import culturaImg from "@/assets/cultura.png";
import { Frown } from "lucide-react";

export default function ProjectGallery({ imageURL }: ProjectImages) {
  const imageQtd = imageURL.length;

  if (imageQtd > 0)
    return (
      <div className="flex flex-col w-4/5 self-center">
        <div className="text-4xl font-bold underline">Galeria</div>
        <Carousel>
          <CarouselContent className="py-4">
            {imageURL!.map((item, index) => (
              <CarouselItem key={index} className="px-16">
                <Card className="p-0 rounded-3xl">
                  <CardContent className="p-0">
                    <img
                      src={`${item != "" ? item : culturaImg}`}
                      className="rounded-3xl"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="-translate-y-1" />
          <CarouselPrevious className="-translate-y-1" />
        </Carousel>
      </div>
    );

  return (
    <div className="flex flex-col w-2/3 self-center gap-4">
      <div className="flex flex-col w-2/3 self-center text-gray-400 my-4 py-4">
        <Frown className="scale-400 mb-10 self-center" />
        <p className="text-4xl">
          Ainda não temos imagens do projeto. Cheque novamente mais tarde!
        </p>
      </div>
    </div>
  );
}
