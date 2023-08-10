import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="mt-14">
      <Link href="/" className="flex flex-col items-center">
        <h1 className="text-7xl font-semibold">
          Bit
          <span className="bg-slate-900 text-slate-200 p-1 px-2 rounded-xl">
            Plays
          </span>
        </h1>
        <p className="text-xl mt-4 text-slate-700">
          Some mini games for fun and decision making
        </p>
      </Link>
    </div>
  );
};

export default Header;
