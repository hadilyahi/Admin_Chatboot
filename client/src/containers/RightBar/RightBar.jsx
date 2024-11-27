"use client";

import { useEffect, useState } from "react";

// components
import Image from "next/image";
import StyledBtn from "../../Components/UI/StyledBtn";
import { Card } from "../../Components";

// icons
import {
  IoIosNotificationsOutline,
  IoMdArrowBack,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { cards } from "../../utils/staticData";

const RightBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={`absolute top-0 z-10 duration-500 h-screen w-[100%] md:w-[400px] bg-white ease-in space-y-10 px-7 pt-[50px] ${isOpen ? "right-2" : "md:-right-[400px] -right-full"}`}
    >
      <StyledBtn
        className={`absolute top-[50px] -left-7 z-10 duration-500 ease-in bg-blue text-white p-2` }

      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle Sidebar"
      >
      <IoMdArrowBack className={`${isOpen ? "rotate-180" : ""} duration-500 ease-in`}/>
    </StyledBtn>

      <div className="flex items-center justify-end cursor-pointer gap-x-4 p-2 w-full">
        <IoIosNotificationsOutline className="text-2xl" />

        <Image
          src="https://picsum.photos/200"
          className="w-10 h-10 rounded-full"
          alt="User Profile"
          width={200}
          height={200}
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl">Your Lorem ipsum</h1>

        <p className="flex items-center gap-x-2 cursor-pointer text-yellow hover:underline hover:text-amber-500 duration-200">
          <samp>more</samp> <IoMdArrowRoundForward />
        </p>
      </div>

      {/* Cards */}
      <div className="w-full space-y-5">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} time={card.time} />
        ))}
      </div>
    </section>
  );
};

export default RightBar;
