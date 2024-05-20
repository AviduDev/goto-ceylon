import { relativeDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { Destination } from "@/types/interface";

interface Params {
  params: {
    slug: string;
  };
}

async function getDestination(slug: string) {
  const query = `*[_type == "destination" && slug.current == "${slug}"][0] {
  title,
    slug,
    _updatedAt,
    _id
}`;

  const destination = await client.fetch(query);
  return destination;
}

export default async function Page({ params }: Params) {
  const destination: Destination = await getDestination(params.slug);

  return (
    <div>
      <h1>hi</h1>
      <h2>{destination.title}</h2>
      <p>{relativeDate(destination._updatedAt)}</p>
    </div>
  );
}
