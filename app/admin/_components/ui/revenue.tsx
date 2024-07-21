"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", Earn: 2, Client: 1 },
  { month: "February", Earn: 3, Client: 2 },
  { month: "March", Earn: 2, Client: 1 },
  { month: "April", Earn: 3, Client: 1 },
  { month: "May", Earn: 2, Client: 3 },
  { month: "June", Earn: 3, Client: 1 },
  { month: "July", Earn: 2, Client: 2 },
  { month: "August", Earn: 3, Client: 1 },
  { month: "September", Earn: 2, Client: 4 },
  { month: "October", Earn: 3, Client: 1 },
  { month: "November", Earn: 4, Client: 1 },
  { month: "December", Earn: 2, Client: 1 },
];
const chartConfig = {
  Earn: {
    label: "Earn",
    color: "hsl(var(--chart-1))",
  },
  Client: {
    label: "Client",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;
export function Revenue() {
  return (
    <Card className="h-full w-full dark:bg-[#0e1421] bg-[#fafbfb]">
      <CardHeader>
        <CardTitle>Revenue</CardTitle>
      </CardHeader>
      <CardContent className="h-[230px] ">
        <ChartContainer config={chartConfig} className=" h-full w-full">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="Earn" fill="var(--color-Earn)" radius={8} />
            <Bar dataKey="Client" fill="rgb(96, 168, 251)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
