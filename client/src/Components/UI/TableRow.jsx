"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CiEdit, CiTrash } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import StyledBtn from "../../Components/UI/StyledBtn";
import { FaCamera } from "react-icons/fa";

const TableRow = ({
  data2,
  columns,
  isReadOnly,
  getRowId,
  rowId,
  onEdit,
  onDelete,
  path,
}) => {
  const [activeRowId, setActiveRowId] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const [loadingRowId, setLoadingRowId] = useState(null); // Row-specific loading

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

  const handleDelete = (id) => {
    setLoadingRowId(id); // Indicate loading for the specific row
    onDelete(id).finally(() => setLoadingRowId(null));
  };

  return (
    <div className="overflow-y-auto h-screen">
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
          {loading ? ( // Show loading spinner when the table is in loading state
            <tr>
              <td colSpan={columns.length + 2} className="text-center py-10">
                <div className="flex justify-center items-center space-x-2">
                  <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 rounded-full"></div>
                  <span className="text-gray-500">Loading...</span>
                </div>
              </td>
            </tr>
          ) : (
            data2?.map((row) => (
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
                      onclick={(e) => {
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
                              href={`${path}/${row.id}`}
                              className="text-2xl text-blue"
                            >
                              <IoEyeOutline />
                            </Link>
                            <button
                              className="text-2xl text-green"
                              onClick={() => onEdit(row.id)}
                            >
                              <CiEdit />
                            </button>
                            <button
                              onClick={() => handleDelete(row.id)}
                              className={`text-2xl ${
                                loadingRowId === row.id
                                  ? "text-gray cursor-not-allowed"
                                  : "text-red-500"
                              }`}
                              disabled={loadingRowId === row.id}
                            >
                              {loadingRowId === row.id ? "..." : <CiTrash />}
                            </button>
                          </div>
                        </div>
                      )}
                    </StyledBtn>
                  </td>
                )}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TableRow;
