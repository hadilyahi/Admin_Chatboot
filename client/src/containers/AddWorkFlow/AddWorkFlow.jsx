"use client";
import React, { useState } from "react";
import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";

const AddWorkFlow = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    type: "",
    status: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add submission logic here
  };

  return (
    <div className="w-[600px] h-fit px-3">
      <h1 className="w-full text-center text-zinc-700 text-2xl font-bold">
        Add WorkFlow
      </h1>

      {/* Form */}
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="w-full grid grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Inputs
              className="rounded border border-gray px-2 h-10 w-full"
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Category
            </label>
            <Inputs
              className="rounded border border-gray px-2 h-10 w-full"
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="type"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Type
            </label>
            <Inputs
              className="rounded border border-gray px-2 h-10 w-full"
              type="text"
              name="type"
              id="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
            />
          </div>
          <div className="">
            {/* <Inputs
              className="rounded border px-2"
              type=""
              name="status"
              id="status"
              checked={formData.status}
              onChange={handleChange}
            /> */}
            <label
              htmlFor="status"
              className="text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select name="" id="" className="rounded border border-gray px-2 h-10 w-full outline-none">
              <option value="">open</option>
              <option value="">paid</option>
              <option value="">inactive</option>
              <option value="">due</option>
            </select>
          </div>
        </div>

        {/* submited btn */}
        <StyledBtn
          type="submit"
          className="mt-4 w-full justify-center bg-blue text-white py-2 rounded hover:bg-blue transition duration-300"
        >
          <h1>Submit</h1>
        </StyledBtn>
      </form>
    </div>
  );
};

export default AddWorkFlow;
