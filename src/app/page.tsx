import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" mt-5">
      <div className="flex justify-evenly text-center mt-32">
        <Link href="/toss" className="flex flex-col">
          <Image src="/toss/heads.png" width={200} height={200} alt="toss" />
          <h1 className="font-bold mt-2">Coin Toss</h1>
        </Link>
        <Link href="/dice" className="flex flex-col">
          <div className="bg-slate-400 rounded-2xl">
            <Image src="/dice/6.png" width={200} height={200} alt="toss" />
          </div>
          <h1 className="font-bold mt-2">Coin Toss</h1>
        </Link>
      </div>
    </div>
  );
}
