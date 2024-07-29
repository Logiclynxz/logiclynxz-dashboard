import Link from "next/link";

export default function Page({ params }: { params: { state: string } }) {
  const { state } = params;
  console.log(state);
  return (
    <div>
      <Link href={"/projects"}>Go back</Link>
      <h1>New project page</h1>
      <p>I am {state}</p>
    </div>
  );
}
