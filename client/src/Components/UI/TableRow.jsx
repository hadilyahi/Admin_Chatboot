"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import StyledBtn from "./StyledBtn";

// Map for dynamic status colors
const statusColors = {
  Paid: "bg-green",
  Unpaid: "bg-red",
  Open: "bg-yellow",
  Inactive: "bg-zinc-500",
  Due: "bg-red-600",
};

const TableRow = ({ customer, style, options, checkbox }) => {
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

  // const statusColor = statusColors[customer.status] || "bg-gray-300";

  return (
    <div
      key={customer.id}
      className="flex items-start justify-between border border-zinc-200 p-3"
    >
      {checkbox && (
        <div className="flex-[0.03]">
          <input
            type="checkbox"
            name="selectCurrent"
            id="selectCurrent"
            checked={isChecboxSelected}
            onChange={() => setIsChecboxSelected(!isChecboxSelected)}
          />
        </div>
      )}

      {Object.keys(customer).map((key) => {
        return key === "name" ? (
          <Link
            href={`/workflows/${customer.id}`}
            key={key}
            className={style[key]}
          >
            {customer[key]}
          </Link>
        ) : (
          <div key={key} className={`${style && style[key]}`}>
            {customer[key]}
          </div>
        )
      })}

      {
        options && (
          <StyledBtn
            onClick={toggleMenu}
            className={`rounded-full flex-[0.05] aspect-square justify-center hover:shadow-lg relative`}
          >
            <BsThreeDotsVertical />
            <div
              className={`menu-container bg-white z-10 rounded border border-gray shadow p-2 ${isMenuOpen ? "absolute top-14 right-7" : "hidden"
                }`}
            >
              <div className="flex flex-row-reverse gap-x-2">
                <Link
                  href={`/workflows/edit/${customer.id}`}
                  className="text-3xl hover:text-green hover:animate-pulse"
                >
                  <CiEdit />
                </Link>
                <CiTrash className="text-3xl hover:text-red-500 hover:animate-pulse" />
              </div>
            </div>
          </StyledBtn>
        )
      }
    </div>
  );
};

export default TableRow;
