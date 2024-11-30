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
  console.log(categoryName);
  const [data, setData] = useState([]);
  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "Name" },
  ];
  const onEdit = (id) => {
    if (id) {
      setIsEditCatrgotyOpen(true);
    } else {
      showErrorAlert("id not found");
    }
  };

  const onDelete = (id) => {
    if (id) {
      setIsDeleteCategyOpen(true);
    } else {
      showErrorAlert("id not found");
    }
  };

  const onClose = () => {
    setIsAddCatrgotyOpen(false);
    setIsEditCatrgotyOpen(false);
    setIsDeleteCategyOpen(false);
  };
  const btn = [
    {
      icon: <FaPlus />,
      title: "Add Category",
      className: "bg-cyan-800 text-white hover:bg-sky-700",
    },
  ];

  // fetch all categories
  useEffect(() => {
    getCategories().then((data) => {
      console.log("data :", data);
      const res = data.data.categories;
      const formattingData = res.map((item) => ({
        id: item._id,
        name: item.name,
      }));
      setData(formattingData);
    });
  }, []);

  

  // delete category
  const onDeleteCategory = () => {
    deleteCategories({name:categoryName})
      .then(() => {
        showSuccessAlert("category deleted successfully");
      })
      .catch((error) => {
        showErrorAlert(error.message);
      });
  };

  return (
    <main className="w-full h-full">
      <TableHead
        options={[{ filter: true, search: true }]}
        btn={btn}
        onAddCategory={() => setIsAddCatrgotyOpen(true)}
      />

      <TableRow
        columns={columns}
        data2={data}
        path="/categories"
        onEdit={onEdit}
        onDelete={onDelete}
      />

      {/* add Category */}
      <Modals isOpen={isAddCatrgotyOpen} onClose={onClose}>
        <CategoryForm type="Add" />
      </Modals>

      {/* edit category */}
      <Modals isOpen={isEditCatrgotyOpen} onClose={onClose}>
        <CategoryForm type="Update" />
      </Modals>

      {/* delete category */}
      <Modals isOpen={isDeleteCategyOpen} onClose={onClose}>
        <h1 className="w-full text-zinc-700 font-bold text-2xl text-center">
          Delete Category
        </h1>
        <div className="flex justify-center items-center gap-x-3  rounded p-5">
          <h1 className="text-lg">Are you sure?</h1>
        </div>
        <Inputs
          type="text"
          placeholder={"asdasdasd"}
          onchange={e => setCategoryName(e.target.value)}
        />
        <div className="w-full grid place-items-center">
          <StyledBtn
            onclick={onDeleteCategory}
            className={
              " bg-red-600 text-white rounded px-3 py-1 self-center gap-x-2 text-lg "
            }
          >
            Delete
            <FaTrash />
          </StyledBtn>
        </div>
      </Modals>
    </main>
  );
};

export default CategoriesPage;
