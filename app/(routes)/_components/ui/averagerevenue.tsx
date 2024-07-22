import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, TrendingDown, TrendingUp, Users } from "lucide-react";

export default function AverageRevenue() {
  return (
    <div className="flex flex-col md:flex-row lg:flex-col gap-5 h-full">
      <Card className=" h-auto  w-full dark:bg-[#0e1421] bg-[#fafbfb]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <DollarSign size={20} />
            <div className="">Total Earnings</div>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <div className="flex gap-4 items-center">
            <strong className="text-[50px]">2.3K</strong>
            <Badge className="succces bg-green-300 hover:bg-green-300 h-6">
              <TrendingUp className=" text-black" size={20} />
            </Badge>
          </div>
        </CardContent>
      </Card>

      <Card className=" h-full w-full dark:bg-[#0e1421] bg-[#fafbfb]">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <Users size={20} />
            <div className="">Total Clients</div>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-full">
          <div className="flex gap-4 items-center">
            <strong className="text-[50px]">53</strong>
            <Badge className="succces bg-red-300 hover:bg-red-300 h-6">
              <TrendingDown className=" text-black  " size={20} />
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
