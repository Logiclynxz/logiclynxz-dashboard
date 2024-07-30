import DynamicBreadcrumbs from "@/components/Breadcrumbs";
import { capitalizeFirstLetter } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";

const DynamicStatePage = ({
  params,
}: {
  params: { state: string; id: string };
}) => {
  const { state, id } = params;

  if (state !== "view" && state !== "edit") {
    redirect("/projects");
  }

  return (
    <div>
      <div className="flex gap-1 flex-col mb-3">
        <DynamicBreadcrumbs
          linkName="Projects"
          linkRoute="projects"
          currentPage={`${capitalizeFirstLetter(state)} Page`}
        />
      </div>
      <h1>DynamicStatePage | {state}</h1>
      <p>{id}</p>
    </div>
  );
};

export default DynamicStatePage;
