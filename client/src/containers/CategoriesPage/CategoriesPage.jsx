"use client";


import { useState, useEffect } from "react";
import TableHead from "../TableHead/TableHead";
import { FaPlus, FaTrash } from "react-icons/fa";
import Modals from "../Modals/Modals";
import CategoryForm from "./CategoryForm/CategoryForm";
import { Inputs, TableRow } from "../../Components";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import { createCategory, deleteCategories, getCategories } from "../../utils/api/categories";
import StyledBtn from "../../Components/UI/StyledBtn";

const CategoriesPage = () => {
  const [isAddCatrgotyOpen, setIsAddCatrgotyOpen] = useState(false);
  const [isEditCatrgotyOpen, setIsEditCatrgotyOpen] = useState(false);
  const [isDeleteCategyOpen, setIsDeleteCategyOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [rowId, setRowId] = useState(null);
  const [data, setData] = useState([]);

  const onSelectRow = (id) => setRowId((prev) => (prev === id ? null : id));
  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "Name" },
  ];

  const onEdit = () => {
    if (rowId) {
      setIsEditCatrgotyOpen(true);
    } else {
      showErrorAlert("Please select a category to edit.");
    }
  };

  const onDelete = () => setIsDeleteCategyOpen(true);

  const onClose = () => {
    setIsAddCatrgotyOpen(false);
    setIsEditCatrgotyOpen(false);
    setIsDeleteCategyOpen(false);
  };

  const btn = [
    {
      icon: <FaPlus />,
      title: "Add Category",
      className: "bg-cyan-600 text-white hover:bg-cyan-800 rounded-md px-4 py-2 flex items-center gap-x-2",
    },
    {
      icon: <FaTrash />,
      title: "Delete",
      className: "bg-red-500 text-white hover:bg-red-700 rounded-md px-4 py-2 flex items-center gap-x-2",
    },
  ];

  // Fetch all categories
  useEffect(() => {
    getCategories().then((data) => {
      const res = data.data.categories;
      const formattingData = res.map((item) => ({
        id: item._id,
        name: item.name,
      }));
      setData(formattingData);
    });
  }, []);

  // Delete category
  const onDeleteCategory = () => {
    deleteCategories({ name: categoryName })
      .then(() => {
        showSuccessAlert("Category deleted successfully");
      })
      .catch((error) => {
        showErrorAlert(error.message);
      });
  };

  return (
    <main className="w-full h-full md:p-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <TableHead
          options={[{ filter: true, search: true }]}
          btn={btn}
          onAddCategory={() => setIsAddCatrgotyOpen(true)}
          onDelete={onDelete}
        />

        <TableRow
          columns={columns}
          data2={data}
          path="/categories"
          onEdit={onEdit}
          rowId={rowId}
          getRowId={onSelectRow}
        />

        {/* Add Category */}
        <Modals isOpen={isAddCatrgotyOpen} onClose={onClose}>
          <CategoryForm type="Add" />
        </Modals>

        {/* Edit Category */}
        <Modals isOpen={isEditCatrgotyOpen} onClose={onClose}>
          <CategoryForm type="Update" />
        </Modals>

        {/* Delete Category */}
        <Modals isOpen={isDeleteCategyOpen} onClose={onClose}>
          <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-gray-800 text-center">Delete Category</h1>
            <p className="text-lg text-center">Are you sure you want to delete this category?</p>
            <Inputs
              type="text"
              placeholder="Enter category name"
              onchange={(e) => setCategoryName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <div className="w-full flex justify-center">
              <StyledBtn
                onclick={onDeleteCategory}
                className="bg-red-600 hover:bg-red-800 text-white rounded-md px-6 py-2 flex items-center gap-x-2"
              >
                Delete
                <FaTrash />
              </StyledBtn>
            </div>
          </div>
        </Modals>
      </div>
    </main>
  );
};

export default CategoriesPage;
