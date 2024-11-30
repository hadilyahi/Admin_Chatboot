"use client";
import React, { useState , useEffect } from "react";
import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";
import * as Yup from "yup";
import { useFormik } from "formik";
import { createWorkflow } from "../../utils/api/workflows";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import { getCategories } from "../../utils/api/categories";

const AddWorkFlow = ({ type = "Add" }) => {
  const [categoriesArray, setCategoriesArray] = useState([]);
  
  const workflowValidationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    categoryName: Yup.string().required("Category name is required"),
    type: Yup.string().required("Type is required"),
    status: Yup.string().required("Status is required"),
    questions: Yup.array().of(Yup.string()).min(1, "At least one question is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      categoryName: "",
      type: "",
      status: "",
      // questions: [""],
    },
    validationSchema: workflowValidationSchema,
    onSubmit: (values) => {
      createWorkflow(values)
        .then(() => {
          showSuccessAlert("Workflow created successfully");
          window.location.reload();
        })
        .catch(() => {
          showErrorAlert("Something went wrong");
        });
    },
  });

  // get categories
  useEffect(() => {
    getCategories()
      .then((data) => {
      const res = data.data.categories
      setCategoriesArray(res);
      console.log(res)
    })
  } , [])

  return (
    <div className="w-[600px] h-fit px-3">
      <h1 className="w-full text-center text-zinc-700 text-2xl font-bold">
        {type === "Add" ? "Add" : "Update"} Workflow
      </h1>

      <form className="w-full" onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <Inputs
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              onchange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <p className="text-red-500 text-xs">{formik.errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-1">
              Description
            </label>
            <Inputs
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              onchange={formik.handleChange}
              value={formik.values.description}
            />
            {formik.errors.description && formik.touched.description && (
              <p className="text-red-500 text-xs">{formik.errors.description}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label htmlFor="categoryName" className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              name="categoryName"
              id="categoryName"
              onChange={formik.handleChange}
              value={formik.values.categoryName}
              className="rounded border px-2 h-10 w-full"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categoriesArray.map((category) => (
                <option key={category._id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
            {formik.errors.categoryName && formik.touched.categoryName && (
              <p className="text-red-500 text-xs">{formik.errors.categoryName}</p>
            )}
          </div>

          {/* Type */}
          <div>
            <label htmlFor="type" className="block text-sm font-medium mb-1">
              Type
            </label>
            <Inputs
              type="text"
              name="type"
              id="type"
              placeholder="Type"
              onchange={formik.handleChange}
              value={formik.values.type}
            />
            {formik.errors.type && formik.touched.type && (
              <p className="text-red-500 text-xs">{formik.errors.type}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium mb-1">
              Status
            </label>
            <select
              name="status"
              id="status"
              onChange={formik.handleChange}
              value={formik.values.status}
              className="rounded border px-2 h-10 w-full"
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Validated">Validated</option>
              <option value="Queued">Queued</option>
              <option value="Scheduled">Scheduled</option>
              <option value="Active">Active</option>
              <option value="InActive">InActive</option>
            </select>
            {formik.errors.status && formik.touched.status && (
              <p className="text-red-500 text-xs">{formik.errors.status}</p>
            )}
          </div>
        </div>

        <StyledBtn type="submit" className="mt-4 w-full bg-blue text-white py-2 rounded">
          {type === "Add" ? "Save" : "Update"}
        </StyledBtn>
      </form>
    </div>
  );
};

export default AddWorkFlow;
