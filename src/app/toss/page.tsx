"use client";

import Image from "next/image";
import React from "react";
import { BsArrowRepeat } from "react-icons/bs";

const CoinToss = () => {
  const ch = Math.floor(Math.random() * 2);

  return (
    <div className="flex flex-col mt-20 items-center">
      <div>
        {ch === 1 ? (
          <div>
            <Image src="/toss/heads.png" width={200} height={200} alt="heads" />
            <h1 className="font-semibold text-xl text-center">Heads</h1>
          </div>
        ) : (
          <div>
            <Image src="/toss/tails.png" width={200} height={200} alt="heads" />
            <h1 className="font-semibold text-xl text-center">Tails</h1>
          </div>
        )}
      </div>
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

export default CoinToss;
