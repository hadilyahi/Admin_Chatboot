"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarLinks = [
    { ImgSrc: "/dashbord.svg", name: "Dashboard", href: "/" },
    { ImgSrc: "/dashbord.svg", name: "Workflows", href: "/workflows" },
    { ImgSrc: "/faQ.svg", name: "FAQs", href: "/faqs" },
    { ImgSrc: "/Reports.svg", name: "Reports", href: "/reports" },
    { ImgSrc: "/settings.svg", name: "Settings", href: "/settings" },
];

const SidebarLinks = () => {
    const linkSigments = usePathname().split("/");
    console.log(linkSigments);
    return (
        <ul className="flex flex-col items-center gap-4 w-full flex-1">
            {sidebarLinks.map((item, idx) => (
                <li key={idx} className="w-full">
                    <Link href={item.href} className={`flex items-center justify-start gap-3 overflow-hidden p-2 rounded-lg ${linkSigments[linkSigments.length - 1] === item.href.split("/")[1] ? "bg-zinc-200" : "hover:bg-gray"}`}>
                        <Image src={item.ImgSrc} alt={item.name} width={20} height={20} />

                        <span className="flex-1">{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SidebarLinks