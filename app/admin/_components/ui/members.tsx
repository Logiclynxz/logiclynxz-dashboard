import { CardHeader } from "@/components/ui/card";
import CardMember from "./cardmember";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function Members() {
  return (
    <div className="h-full w-full ">
      <Carousel>
        <div className="flex justify-between items-center h-full w-full ">
          <CardHeader>
            <strong className="text-[30px]">Members</strong>
          </CardHeader>
          <div className="mt-10 flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <div className="flex justify-center">
          <div className=" w-full ">
            <CarouselContent>
              <CarouselItem>
                <CardMember />
              </CarouselItem>
              <CarouselItem>
                <CardMember />
              </CarouselItem>
              <CarouselItem>
                <CardMember />
              </CarouselItem>
            </CarouselContent>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
