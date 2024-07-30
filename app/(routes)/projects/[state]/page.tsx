import Link from "next/link";
import { redirect } from "next/navigation";

export default function Page({ params }: { params: { state: string } }) {
  const { state } = params;
  console.log(state);
  if (state !== "new" && state !== "view" && state !== "edit") {
    redirect("/projects");
  }

  return (
    <div>
      <Link href={"/projects"}>Go back</Link>
      <h1>New project page</h1>
      <p>I am {state}</p>
    </div>
  );
}
