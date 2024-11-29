"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import TableHead from "../TableHead/TableHead";
import { TableRow } from "../../Components";
import { columns, data2 } from "../../utils/staticData";
import Modals from "../Modals/Modals";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import Delete from "../Delete/Delete";
import AddFaqs from "../AddFaqs/AddFaqs";
const FaqsPageContainer = () => {
  const btn = [
    {
      icon: <FaPlus />,
      title: "Add Faqs",
      className: "bg-blue text-white hover:bg-sky-700",
    },
    {
      icon: <FaTrash />,
      title: "Delete",
      className: "bg-red-600 text-white hover:bg-red-700",
    },
    {
      icon: <FaEdit />,
      title: "Edit",
      className: "bg-yellow text-white hover:bg-yellow",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [isDeleteFaqsOpen, setIsDeleteFaqsOpen] = useState(false);

  const onSelectRow = (id) => setRowId((prev) => (prev === id ? null : id));

  const onAdd = () => setIsAddOpen(true);

  const onEdit = () => {
    if (rowId) {
      setIsOpen(true);
    } else {
      showErrorAlert("you should be select a row");
    }
  };

  const onDelete = () => {
    if (rowId) {
      setIsDeleteFaqsOpen(true);
    } else {
      showErrorAlert("you should be select a row");
    }
  };

  const onClose = () => {
    setIsOpen(false);
    setIsDeleteFaqsOpen(false);
    setIsAddOpen(false);
  };
  return (
    <main className="w-full h-full md:mx-auto">
      <TableHead
        options={[{ filter: true, search: true }]}
        btn={btn}
        onEdit={onEdit}
        onAdd={onAdd}
        onDelete={onDelete}
      />

      <TableRow
        columns={columns}
        data2={data2}
        rowId={rowId}
        getRowId={onSelectRow}
        isReadOnly={true}
      />

      {/* Modal Add */}
      <Modals isOpen={isAddOpen} onClose={onClose}>
        <AddFaqs type="Add" />
      </Modals>

      {/* Modal Edit */}
      <Modals isOpen={isOpen} onClose={onClose}>
        <AddFaqs type="Update" />
      </Modals>

      {/* Modal Delete */}
      <Modals isOpen={isDeleteFaqsOpen} onClose={onClose}>
        <Delete
          titelDelete="Faqs"
          question="are you sure you want to delete this Faqs"
        />
      </Modals>
    </main>
  );
};

export default FaqsPageContainer;
