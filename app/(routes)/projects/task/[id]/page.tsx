import Link from "next/link";
export default async function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  // fetch the task base on id
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return (
    <div>
      <Link href={"/projects"}>Go back</Link> <br />
      {id}
    </div>
  );
}
