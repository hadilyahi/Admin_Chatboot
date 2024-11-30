import { useState } from "react";
import { Inputs } from "../../../Components";
import StyledBtn from "../../../Components/UI/StyledBtn";
import { createCategory } from "../../../utils/api/categories";
import { showErrorAlert, showSuccessAlert } from "../../../utils/alert";

const CategoryForm = ({ type }) => {
  const [categoryName, setCategoryName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = () => {
    if (!categoryName.trim()) {
      showErrorAlert("Category name cannot be empty!");
      return;
    }
    setIsLoading(true);
    createCategory({ name: categoryName })
      .then(() => {
        showSuccessAlert("Category created successfully");
        window.location.reload(); // Refresh page after successful submission
      })
      .catch((error) => {
        showErrorAlert(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="p-6 mx-auto">
      <h1 className="text-2xl font-semibold text-center text-gray-800">
        {type === "Add" ? "Add" : "Update"} Category
      </h1>

      <div className="mt-4">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-700"
        >
          Category Name
        </label>
        <Inputs
          type="text"
          placeholder="Enter category name"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onchange={(e) => setCategoryName(e.target.value)}
          aria-label="Category Name"
        />
      </div>

      <div className="mt-6">
        <StyledBtn
          type="button"
          onclick={handleSubmit}
          className={`w-full py-2 px-4 rounded-md text-white ${
            isLoading
              ? "bg-gray cursor-not-allowed"
              : "bg-blue hover:bg-sky-700"
          } transition duration-300`}
          disabled={isLoading}
        >
          {isLoading ? "Processing..." : type === "Add" ? "Add Category" : "Update Category"}
        </StyledBtn>
      </div>
    </div>
  );
};

export default CategoryForm;
