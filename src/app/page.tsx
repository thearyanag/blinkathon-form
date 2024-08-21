import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-screen h-screen">
      <Link href="https://x.com/thesendcoin" target="_blank">
        <Image
          src="/banner.jpeg"
          alt="background"
          layout="fill"
          objectFit="cover"
          priority
        />
      </Link>
    </main>
  );
}
