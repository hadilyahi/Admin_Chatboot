import {useState} from "react";
import { Inputs } from "../../../Components";
import StyledBtn from "../../../Components/UI/StyledBtn";
import { createCategory } from "../../../utils/api/categories";
import { showErrorAlert, showSuccessAlert } from "../../../utils/alert";

const CategoryForm = ({type}) => {
  const [categoryName , setCategoryName] = useState('')
  // create category
  const createCat = () => {
    createCategory({ name: categoryName })
      .then((data) => {
        showSuccessAlert("category created successfully");
        window.location.reload();
      })
      .catch((error) => {
        showErrorAlert(error.message);
      });
  }
  return (
    <>
      <h1 className="text-3xl w-full text-center">{type === "Add" ? "Add" : "Update"} Category</h1>

      <div className="w-full grid place-items-center my-5">
        <label
          htmlFor="name"
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          Category Name
        </label>
        <Inputs
          type="text"
          placeholder="Category name"
          className="rounded border border-gray px-2 h-10 w-full"
          onchange={e => setCategoryName(e.target.value)}
        />
        <StyledBtn
          type="submit"
          onclick={type === "Add" ? createCat : ''}
          className="mt-4 w-full justify-center bg-blue text-white py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          <h1>{type === "Add" ? "Validate" : "Update"}</h1>
        </StyledBtn>
      </div>
    </>
  );
};

export default CategoryForm;
