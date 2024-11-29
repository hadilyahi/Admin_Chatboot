"use client";

import React, { useState } from "react";
import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";
import { BsMotherboardFill } from "react-icons/bs";

const AddFaqs = ({ type, answers }) => {
  const [types, setTypes] = useState("");
  const [answerAsArry, setAnswerAsArry] = useState([]);
  const categories = ["Category 1", "Category 2", "Category 3"];
  const questionTypes = ["type 1", "type 2", "type 3"];
  const addValueType1 = (e) => {
    // e.preventDefault();
    // setAnswerAsArry([...answerAsArry , e.target.value]);
    setAnswerAsArry([...answerAsArry, e.target.value]);
  };
  return (
    <section className="md:mx-auto">
      <h1 className="text-center text-zinc-700 text-2xl font-bold">
        {type === "Add" ? "Add" : "Update"} FAQs
      </h1>

      <Inputs
        type="text"
        placeholder="Question"
        position="my-3"
        className="p-3 border-b border-zinc-200 rounded"
        id="question"
      />

      <textarea
        id="description"
        cols="10"
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
          onClick={(e) => setTypes(e.target.value)}
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
      {/* answers */}
      {types === "type 1" ? (
        <div className="grid grid-cols-2 gap-x-3 items-center">
          <Inputs
            type="text"
            placeholder="Answer"
            position="my-3"
            className="p-3 border-b border-zinc-200 rounded"
            id="answer"
            onclick={addValueType1}
          />
          <button
            className="bg-blue text-white rounded px-3 mx-5 md:mx-10 py-1 w-fit flex justify-center duration-300 hover:bg-cyan-900 hover:shadow-xl text-lg"
            onClick={()=> console.log("im working")}
          >
            <BsMotherboardFill />
          </button>
          {answerAsArry.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      ) : (
        "type 2"
      )}
      <StyledBtn className="bg-blue text-white rounded px-3 mx-5 md:mx-10 py-1 w-fit flex justify-center duration-300 hover:bg-cyan-900 hover:shadow-xl text-lg">
        <h1>{type === "Validate" ? "Add" : "Update"}</h1>
      </StyledBtn>
    </section>
  );
};

export default AddFaqs;
