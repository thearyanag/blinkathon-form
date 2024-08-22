import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Home() {
  const url = `https://www.blinkathon.fun/`;
  redirect(`https://dial.to?action=${url}`);

  return (
    <main className="relative w-screen h-screen">
      <Link href="https://x.com/thesendcoin/status/1826308810337816642" target="_blank">
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
