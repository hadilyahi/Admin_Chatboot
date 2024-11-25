"use client";
import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: 1, src: "/dashbord.svg", alt: "Dashboard", text: "Dashboard" },
  { id: 2, src: "/faQ.svg", alt: "FAQs", text: "FAQs Management" },
  { id: 3, src: "/Reports.svg", alt: "Reports", text: "Reports" },
  { id: 4, src: "/settings.svg", alt: "Settings", text: "Bot Settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`h-screen bg-[#22297C] text-white flex flex-col gap-40 transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      }`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
  
      <div className="h-20 flex items-center justify-center m-4">
        <Image
          src={"/Logo.jpg"}
          alt={"Logo"}
          width={isOpen ? 100 : 60}
          height={isOpen ? 100 : 60}
          className="rounded-full"
        />
      </div>

     
      <nav className="space-y-4 ">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 mx-4 "
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            {isOpen && (
              <span className="text-[#FECC0B] font-itim text-2xl">
                {item.text}
              </span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
