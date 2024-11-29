import React from "react";
import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";

const AddFaqs = ({ type }) => {
  const categories = ["Category 1", "Category 2", "Category 3"];
  const questionTypes = ["Type 1", "Type 2", "Type 3"];

  return (
    <section className="w-full h-full mt-5 mb-3 mx-3">
      <h1 className="text-center text-zinc-700 text-2xl font-bold">
        {type === "Add" ? "Add" : "Update"} FAQs
      </h1>

      <Inputs
        type="text"
        placeholder="Question"
        position="my-3"
        className="p-3"
        id="question"
      />

      <textarea
        id="description"
        cols="30"
        rows="10"
        placeholder="Description"
        className="w-full p-3 border border-zinc-200 rounded my-3"
      ></textarea>

      <div className="w-full grid grid-cols-2 gap-3">
        <select
          id="category"
          className="w-full p-3 border border-zinc-200 rounded my-3"
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <select
          id="questionType"
          className="w-full p-3 border border-zinc-200 rounded my-3"
        >
          <option value="">Select Question Type</option>
          {questionTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <div className="flex items-center my-3">
          <Inputs
            type="checkbox"
            placeholder="Is Required"
            id="isRequired"
            className="mr-2"
          />
          <label htmlFor="isRequired">Is Required</label>
        </div>

        <div className="flex items-center my-3">
          <Inputs
            type="checkbox"
            placeholder="Is Active"
            id="isActive"
            className="mr-2"
          />
          <label htmlFor="isActive">Is Active</label>
        </div>
      </div>

      <StyledBtn className="bg-blue text-white rounded px-3 py-1 w-full flex justify-center duration-300 hover:bg-cyan-900 hover:shadow-xl text-lg">
        <h1>{type === "Add" ? "Add" : "Update"}</h1>
      </StyledBtn>
    </section>
  );
};

export default AddFaqs;
