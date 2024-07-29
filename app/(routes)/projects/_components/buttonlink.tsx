"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface ButtonProps {
  id: string;
}

export default function ButtonLink(props: ButtonProps) {
  const router = useRouter();
  const { id } = props;
  return (
    <>
      <Button
        className="w-full bg-[rgb(54,98,227)] dark:text-white dark:hover:bg-[#0d1b44] hover:bg-[#5da3f4]"
        onClick={() => {
          router.push(`/projects/task/${id}`);
        }}
      >
        View Task
      </Button>
    </>
  );
}
