import Link from "next/link";

export default function AddProject() {
  return (
    <div>
      <Link href={"/projects"}>Go back</Link>
      <h1>new project page</h1>
    </div>
  );
}
