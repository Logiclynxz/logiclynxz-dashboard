"use client";
import { Button } from "@/components/ui/button";

interface ButtonProps {
  setter: React.Dispatch<React.SetStateAction<string>>;
}
export default function ButtonCategory(props: ButtonProps) {
  const { setter } = props;
  return (
    <>
      <div className="flex gap-2 mt-5">
        <div>
          <Button onClick={() => setter("All")}>All</Button>
        </div>
        <div>
          <Button onClick={() => setter("Mobile Development")}>
            Mobile Development
          </Button>
        </div>
        <div>
          <Button onClick={() => setter("Web Development")}>
            Web Development
          </Button>
        </div>
      </div>
    </>
  );
}
