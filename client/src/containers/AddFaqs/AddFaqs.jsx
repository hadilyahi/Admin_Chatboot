"use client";

import React, { useState } from "react";
import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";
import { BsMotherboardFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const AddFaqs = ({ type }) => {
  const [types, setTypes] = useState("");
  const [answerAsArray, setAnswerAsArray] = useState([]);
  const [answerInput, setAnswerInput] = useState("");

  const categories = ["Category 1", "Category 2", "Category 3"];
  const questionTypes = ["type 1", "type 2"];

  const addValueType1 = () => {
    if (answerInput.trim()) {
      setAnswerAsArray([...answerAsArray, answerInput]);
      setAnswerInput(""); // Clear input after adding
    } else {
      alert("Please enter an answer before adding.");
    }
  };

  const handleType = (e) => {
    setTypes(e.target.value);
    if (e.target.value === "type 2") {
      setAnswerAsArray([]);
    }
  };
  const removeAnswer = (index) => {
    const updatedAnswers = answerAsArray.filter((_, idx) => idx !== index);
    setAnswerAsArray(updatedAnswers);
  };

  const clearAllAnswers = () => {
    setAnswerAsArray([]);
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
        className="p-3 border border-gray rounded"
        id="question"
      />
      <div className="grid grid-cols-2 gap-x-3">
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
          value={types}
          onChange={handleType}
        >
          <option value="">Select Question Type</option>
          {questionTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {types === "type 1" ? (
        <>
          <div className="grid grid-cols-3 gap-x-3 items-center">
            {/* <input
              type="text"
              placeholder="Answer"
              value={answerInput}
              onChange={(e) => setAnswerInput(e.target.value)}
              className="p-3 border-b border-zinc-200 rounded"
            /> */}
              <Inputs
                type="text"
                placeholder="Answer"
                position="my-3"
                className="p-3 border-b border-zinc-200 rounded"
                id="answer"
                value={answerInput}
                onchange={(e) => setAnswerInput(e.target.value)}
              />
            <button
              className="bg-blue text-white rounded px-3 mx-5 md:mx-10 py-1 flex items-center justify-center duration-300 hover:bg-cyan-900 hover:shadow-xl text-lg"
              onClick={addValueType1}
            >
              <BsMotherboardFill className="mr-1" />
              Add
            </button>
            <button
              className="bg-red-500 text-white rounded px-3 py-2 duration-300 hover:bg-red-700"
              onClick={clearAllAnswers}
            >
              Clear All Answers
            </button>
          </div>
          <div className="grid grid-cols-4 gap-x-2">
            {answerAsArray.map((item, idx) => (
              <div
                key={idx}
                className="col-span-2 flex justify-between items-center my-2 border p-2 rounded "
              >
                <p className="text-left text-zinc-600">{item}</p>
                <StyledBtn
                  onclick={() => removeAnswer(idx)}
                  className="bg-red-500 text-white rounded px-3 py-2 duration-300 hover:bg-red-700"
                >
                  <FaTrash />
                </StyledBtn>
              </div>
            ))}
          </div>
        </>
      ) : (
        <textarea
          id="description"
          cols="10"
          rows="10"
          placeholder="Description"
          className="w-full p-3 border border-zinc-200 rounded my-3"
        ></textarea>
      )}

      <StyledBtn className="bg-blue text-white rounded px-5 mx-2 md:mx-10 py-1 w-fit flex justify-center duration-300 hover:bg-cyan-900 hover:shadow-xl text-lg">
        <h1>{type === "Add" ? "Validate" : "Update"}</h1>
      </StyledBtn>
    </section>
  );
};

export default AddFaqs;
