"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import TableHead from "../TableHead/TableHead";
import { TableRow } from "../../Components";
import { data2 } from "../../utils/staticData";
import Modals from "../Modals/Modals";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import Delete from "../Delete/Delete";
import AddFaqs from "../AddFaqs/AddFaqs";
import { getFaqs } from "../../utils/api/faqs";
const FaqsPageContainer = () => {
  const btn = [
    {
      icon: <FaPlus />,
      title: "Add Faqs",
      className: "bg-blue text-white hover:bg-sky-700",
      path: "/faqs/add",
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
  const columns = [

    { key: "displayId", label: "#" },
    { key: "question", label: "Question" },
    { key: "answer", label: "Answer" },
    { key: "category", label: "Category" },
    { key: "type", label: "Type" },
    { key: "description", label: "Description" },
    { key: "isRequired", label: "Required" },
    { key: "isActive", label: "Active" },

  ];

  const [isOpen, setIsOpen] = useState(false);
  // const [isAddOpen, setIsAddOpen] = useState(false);
  const [data, setData] = useState([]);
  const [rowId, setRowId] = useState(null);
  const [isDeleteFaqsOpen, setIsDeleteFaqsOpen] = useState(false);

  const onSelectRow = (id) => setRowId((prev) => (prev === id ? null : id));
  console.log("rowId", rowId);
  
  // const onAdd = () => setIsAddOpen(true);

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

  const onDeleteFaqs = () => {
    if (rowId) {
      showSuccessAlert("faqs deleted successfully");
      onClose();
    } else {
      showErrorAlert("you should be select a row");
    }
  };
  // fetch faqs
  useEffect(() => {
    getFaqs()
      .then((data) => {
        console.log("data :", data);
        const result = data.data.faqWithSequentialIds;
        const formattingData = result.map((item) => ({
          id: item._id,
          displayId: item.displayId,
          question: item.question ,
          answer: item.answer || "no answer",
          question: item.question,
          category: item.category,
          type: item.type,
          description: item.description,
          isRequired: item.isRequired === true ? "yes" : "no",
          isActive: item.isActive === true ? "yes" : "no",
        }));
        setData(formattingData);
      })
      .catch((error) => {
        console.error(error);
      });
  } , []);
  return (
    <main className="w-full h-full md:mx-auto">
      <TableHead
        options={[{ filter: true, search: true }]}
        btn={btn}
        onEdit={onEdit}
        onDelete={onDelete}
      />

      <TableRow
        columns={columns}
        data2={data}
        rowId={rowId}
        getRowId={onSelectRow}
        isReadOnly={true}
      />

      {/* Modal Add */}
      {/* <Modals isOpen={isAddOpen} onClose={onClose}>
        <AddFaqs type="Add" />
      </Modals> */}

      {/* Modal Edit */}
      <Modals isOpen={isOpen} onClose={onClose}>
        <AddFaqs type="Update" />
      </Modals>

      {/* Modal Delete */}
      <Modals isOpen={isDeleteFaqsOpen} onClose={onClose}>
        <Delete
          onDelete={onDeleteFaqs}
          titelDelete="Faqs"
          question="are you sure you want to delete this Faqs"
        />
      </Modals>
    </main>
  );
};

export default FaqsPageContainer;
