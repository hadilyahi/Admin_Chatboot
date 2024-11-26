import Image from "next/image";
import Link from "next/link";

const sidebarLinks = [
    { id: 1, ImgSrc: "/dashbord.svg", name: "Dashboard", href: "/dashboard" },
    { id: 1, ImgSrc: "/dashbord.svg", name: "Workflows", href: "/workflows" },
    { id: 2, ImgSrc: "/faQ.svg", name: "FAQs", href: "/faqs" },
    { id: 3, ImgSrc: "/Reports.svg", name: "Reports", href: "/reports" },
    { id: 4, ImgSrc: "/settings.svg", name: "Settings", href: "/settings" },
];

const SidebarList = () => {
    return (
        <ul className="flex flex-col items-center gap-4 w-full flex-1">
            {sidebarLinks.map((item) => (
                <li key={item.id} className="w-full">
                    <Link href={item.href} className="flex items-center justify-start gap-3 overflow-hidden hover:bg-gray p-2 rounded-lg">
                        <Image src={item.ImgSrc} alt={item.name} width={20} height={20} />

                        <span className="flex-1">{item.name}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default SidebarList