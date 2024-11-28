"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Linkbar = () => {
    const linkSigments = usePathname().split("/");

    return (
        <div className='flex items-center justify-between gap-2 px-3 py-2 sticky top-0 bg-white shadow z-100000 h-[50px]'>
            <div className='flex items-center gap-2'>
                {linkSigments.map((segment, index) => (
                    <Link href={`${linkSigments.slice(0, index + 1).join("/")}`} key={index} className='flex items-center gap-2 text-xl'>
                        <p>{segment}</p>
                        {index !== linkSigments.length - 1 && <span>/</span>}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Linkbar