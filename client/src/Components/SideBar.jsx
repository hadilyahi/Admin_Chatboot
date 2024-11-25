"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { id: 1, src: "/dashbord.svg", alt: "Dashboard", text: "Dashboard", href: "" },
  { id: 2, src: "/faQ.svg", alt: "FAQs", text: "FAQs", href: "" },
  { id: 3, src: "/Reports.svg", alt: "Reports", text: "Reports", href: "" },
  { id: 4, src: "/settings.svg", alt: "Settings", text: "Settings", href: "" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <div
      className={`h-screen bg-[#22297C] text-white flex flex-col  gap-10 transition-all duration-400 ease-in-out relative ${
        isOpen ? "w-64" : "w-20"
      }`} 
      onMouseEnter={() => setIsOpen(true)} 
      onMouseLeave={() => setIsOpen(false)} 
    >
      {/* toggle button */}
      <div className="absolute top-4 right-4">close</div>

      <div className="h-20 flex items-center justify-center m-4">
        <Image
          src={"/Logo.jpg"}
          alt={"Logo"}  
          width={isOpen ? 80 : 60}
          height={isOpen ? 80 : 60}
          className="rounded-full transition-all duration-400 ease-in-out"
        />
      </div>

      <nav className="space-y-14">
        {navItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 mx-4  cursor-pointer hover:-translate-y-2 duration-200 ease-in-out" 
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={40}
              height={40}
              className="flex-shrink-0"
            />
            {isOpen && (
              <span className="text-[#FECC0B]  font-jaldi text-2xl text-center duration-500">
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
