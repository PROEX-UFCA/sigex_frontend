import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import type { ProjectImages} from "@/utils/project";

import culturaImg from "@/assets/cultura.png";

export default function ProjectGallery({ imageURL }: ProjectImages) {
  return <div className="flex flex-col w-4/5 self-center">
    <div className="text-4xl font-bold underline">Galeria</div>
    <Carousel>
      <CarouselContent className="py-4">
        {imageURL!.map((item, _) => (
          <CarouselItem className="px-16">
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
  </div>;
}
