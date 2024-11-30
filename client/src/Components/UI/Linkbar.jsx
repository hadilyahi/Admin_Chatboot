"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Linkbar = () => {
  const linkSigments = usePathname().split("/");

  return (
    <div className="w-full flex items-center justify-center gap-2 sticky top-0 z-10 py-2 px-3 md:py-5 md:px-10">
      <div className="w-full flex items-center gap-2 bg-gray/80 backdrop-blur p-3 rounded-lg shadow-md">
        
        {/* !!!!!! Why it have been added? */}
        {/* <Link
          href={"/"}
          className="flex items-cener gap-2 text-xl text-zinc-800"
        >
          <span>/</span><p className="hover:underline">dashboard</p>
        </Link> */}

        <Link
          href={"/"}
          className="flex items-cener gap-2 text-xl text-zinc-800"
        >
          <Image src="/algeriePostLogo.svg" alt="logo" width={30} height={30} />
        </Link>

        {linkSigments.map((segment, index) =>
          segment === "/" ? (
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
