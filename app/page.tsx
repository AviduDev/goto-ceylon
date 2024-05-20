import { Button } from "@/components/ui/button";
import { relativeDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { getDestinations } from "@/sanity/queries";
import { Destination } from "@/types/interface";
import Link from "next/link";

const data = await client.fetch(getDestinations);

export default async function Home() {
  const destinations: Destination[] = await data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ul className="list-disc list-inside">
        {destinations.map((dts) => (
          <li key={dts._id}>
            <Link href={`/destinations/${dts.slug.current}`}>{dts.title}</Link>
            <br />
            <p>{relativeDate(dts._updatedAt)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}

// {jobs.map((job) => (
//     <Link key={job.id} href={`/jobs/${job.slug}`}>
//       <JobListing job={job} />
//     </Link>
//   ))}
