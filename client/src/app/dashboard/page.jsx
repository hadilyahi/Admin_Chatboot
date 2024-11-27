"use client";

import { useState } from "react";
import { Inputs } from "../../Components";
import { Banner, RightBar, Statistics, Widget } from "../../containers";
import { IoMdArrowBack } from "react-icons/io";

const DashboardPage = () => {
  // toggle rightbar
  const [isOpen, setIsOpen] = useState(false);
  return (
    // Dashboard.jsx
    <main className={`flex-1 ${isOpen ? "px-1 md:px-3" : "px-5md:px-20"} duration-500 ease-in`}>
      <div
        className={`space-y-20 ${
          !isOpen ? "w-[85%]" : "w-full"
        } duration-500 ease-in`}
      >
        <div className="grid place-items-center w-full my-16">
          {/* Search */}
          <Inputs type={"text"} placeholder={"Search"} position={""} />
        </div>
        {/* Banner */}
        <Banner />

        {/* widget */}
        <Widget />

        {/* statistics */}
        <Statistics />
      </div>

      {/* toggle rightbar */}
      {/* <button
        className={`absolute top-1/2 ${
          !isOpen ? "right-3" : "right-[465px] rotate-180"
        } z-10 duration-500 ease-in bg-sky-900 text-white p-2 rounded-full`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMdArrowBack />
      </button> */}
      {/* rightbar */}
      <RightBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
};

export default DashboardPage;
