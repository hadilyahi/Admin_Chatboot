"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Linkbar = () => {
  const linkSigments = usePathname().split("/");

  return (
    <div className="flex items-center justify-between gap-2 px-3 py-2 sticky top-0 bg-white shadow z-10 h-[50px]">
      <div className="flex items-center gap-2">
        <Link
          href={"/dashboard"}
          className="flex items-cener gap-2 text-xl text-zinc-800"
        >
          <span>/</span><p className="hover:underline">dashboard</p>
        </Link>
        {linkSigments.map((segment, index) =>
          segment === "dashboard" ? (
            ""
          ) : (
            <Link
              href={`${linkSigments.slice(0, index + 1).join("/")}`}
              key={index}
              className="flex items-center gap-2 text-xl text-zinc-800"
            >
              <p className={`hover:underline ${index === linkSigments.length - 1 && "text-zinc-950 underline"}`}>{segment}</p>
              {index !== linkSigments.length - 1 && <span>/</span>}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Linkbar;
