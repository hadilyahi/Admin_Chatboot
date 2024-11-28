"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiEdit, CiTrash } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import StyledBtn from "./StyledBtn";

const TableRow = ({ data2, columns, isReadOnly, getRowId , rowId }) => {
  const [activeRowId, setActiveRowId] = useState(null);

  const toggleMenu = (id) => {
    setActiveRowId(activeRowId === id ? null : id);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Open":
        return "bg-yellow text-white";
      case "Paid":
        return "bg-green text-white";
      case "Inactive":
        return "bg-gray text-black";
      case "Due":
        return "bg-red-600 text-white";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-y-auto max-h-screen">
      <table className="min-w-full bg-white border border-zinc-200 rounded-lg">
        <thead className="bg-gray border-b border-zinc-200">
          <tr>
            <th className="p-3 text-center">
              <input type="checkbox" name="select-all" />
            </th>
            {columns.map((column) => (
              <th key={column.key} className="p-3 text-left text-zinc-500">
                {column.label}
              </th>
            ))}
            {!isReadOnly && (
              <th className="p-3 text-left text-zinc-500">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data2.map((row) => (
            <tr
              key={row.id}
              onClick={() => getRowId(row.id)}
              className={`border-b border-zinc-200 transition-all cursor-pointer ${
                rowId === row.id ? "bg-zinc-300" : "hover:bg-gray "
              }`}
            >
              <td className="p-3 text-center">
                <input
                  type="checkbox"
                  name={`select-row-${row.id}`}
                  id={`check-${row.id}`}
                  onClick={(e) => e.stopPropagation()}
                />
              </td>
              {columns.map((column) => (
                <td key={column.key} className="p-3">
                  {column.isStatus ? (
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(
                        row[column.key]
                      )}`}
                    >
                      {row[column.key]}
                    </span>
                  ) : (
                    row[column.key]
                  )}
                </td>
              ))}
              {!isReadOnly && (
                <td className="p-3 relative">
                  <StyledBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMenu(row.id);
                    }}
                    className="rounded-full aspect-square flex justify-center hover:shadow-lg relative"
                  >
                    <BsThreeDotsVertical />
                    {activeRowId === row.id && (
                      <div className="absolute top-4 right-1 bg-white z-10 rounded border border-gray shadow p-2">
                        <div className="flex flex-col gap-y-2">
                          <Link
                            href={`/workflows/${row.id}`}
                            className="text-2xl text-blue"
                          >
                            <IoEyeOutline />
                          </Link>
                          <Link
                            href={`/workflows/edit/${row.id}`}
                            className="text-2xl text-green"
                          >
                            <CiEdit />
                          </Link>
                          <button
                            className="text-2xl text-red-500"
                          >
                            <CiTrash />
                          </button>
                        </div>
                      </div>
                    )}
                  </StyledBtn>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRow;
