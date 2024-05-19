import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold tracking-tighter">Home</h1>
      <Button asChild>
        <Link href={"/tours"}>Go to Tours</Link>
      </Button>
    </main>
  );
}
