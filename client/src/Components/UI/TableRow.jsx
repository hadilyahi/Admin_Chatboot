"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import StyledBtn from "./StyledBtn";

const TableRow = ({ cutomer }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChecboxSelected, setIsChecboxSelected] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(".menu-container")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  // Map for dynamic status colors
  const statusColors = {
    Paid: "bg-green",
    Unpaid: "bg-red",
    Open: "bg-yellow",
    Inactive: "bg-zinc-500",
    Due: "bg-red-600",
  };

  const statusColor = statusColors[cutomer.status] || "bg-gray-300";

  return (
    <div
      key={cutomer.id}
      className="flex items-start justify-between border border-zinc-200 p-3"
    >
      <div className="flex-[0.03]">
        <input
          type="checkbox"
          name="selectCurrent"
          id="selectCurrent"
          checked={isChecboxSelected}
          onChange={() => setIsChecboxSelected(!isChecboxSelected)}
        />
      </div>

      <div className="w-5 aspect-square flex items-center">{cutomer.id}</div>

      <Link
        href={`/workflows/${cutomer.id}`}
        className="flex-[0.2] hover:underline"
      >
        {cutomer.name}
      </Link>

      <div className="flex-[0.3]">{cutomer.description}</div>

      <div className="flex-[0.2] flex justify-end">
        <span
          className={`px-2 py-1 text-white rounded-full ${statusColor}`}
        >
          {cutomer.status}
        </span>
      </div>

      <div className="flex-[0.2] flex justify-end">{cutomer.rate}</div>

      <div className="flex-[0.2] flex justify-end">{cutomer.balance}</div>

      <div className="flex-[0.2] flex justify-center">{cutomer.deposit}</div>

      <StyledBtn
        onClick={toggleMenu}
        className={`rounded-full flex-[0.05] aspect-square justify-center hover:shadow-lg relative`}
      >
        <BsThreeDotsVertical />
        <div
          className={`menu-container bg-white z-10 rounded border border-gray shadow p-2 ${
            isMenuOpen ? "absolute top-14 right-7" : "hidden"
          }`}
        >
          <div className="flex flex-row-reverse gap-x-2">
            <Link
              href={`/workflows/edit/${cutomer.id}`}
              className="text-3xl hover:text-green hover:animate-pulse"
            >
              <CiEdit />
            </Link>
            <CiTrash className="text-3xl hover:text-red-500 hover:animate-pulse" />
          </div>
        </div>
      </StyledBtn>
    </div>
  );
};

export default TableRow;
