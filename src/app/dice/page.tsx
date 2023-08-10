"use client";

import Image from "next/image";
import { BsArrowRepeat } from "react-icons/bs";

const Dice = () => {
  const ch = Math.floor(Math.random() * 6) + 1;
  return (
    <div className="flex flex-col mt-20 items-center">
      <div className="bg-slate-400 rounded-2xl">
        <Image
          src={`/dice/${ch}.png`}
          width={200}
          height={200}
          alt={ch.toString()}
        />
      </div>
      <h1 className="text-xl font-semibold">{ch}</h1>
      <button
        className="bg-slate-900 text-slate-200 p-4 py-2 mt-10 rounded-xl"
        onClick={() => {
          window.location.reload();
        }}
      >
        <BsArrowRepeat className="text-4xl" />
      </button>
    </div>
  );
};

export default Dice;
