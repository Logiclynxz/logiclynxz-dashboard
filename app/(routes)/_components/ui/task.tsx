import { CardHeader } from "@/components/ui/card";
import CardMember from "./cardmember";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardTask from "./cardtask";
export default function Task() {
  return (
    <div className="w-full ">
      <Carousel className="w-full ">
        <div className="flex justify-between items-center h-full w-full ">
          <CardHeader>
            <strong className="text-[30px]">Projects</strong>
          </CardHeader>
          <div className="mt-10 flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" w-full ">
            <CarouselContent className="-ml-1">
              <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                <CardTask />
              </CarouselItem>
              <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                <CardTask />
              </CarouselItem>
              <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                <CardTask />
              </CarouselItem>
              <CarouselItem className="px-1 md:basis-1/2 lg:basis-1/3">
                <CardTask />
              </CarouselItem>
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
