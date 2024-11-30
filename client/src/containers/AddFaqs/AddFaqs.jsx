"use client";

import React, { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { FaTrash, FaExclamationCircle } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createFaqs } from "../../utils/api/faqs";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";

const AddFaqs = ({ type, data }) => {
  const [types, setTypes] = useState("");
  const [answerAsArray, setAnswerAsArray] = useState([]);
  const [answerInput, setAnswerInput] = useState("");

  const categories = ["Category 1", "Category 2", "Category 3"];
  const questionTypes = ["type 1", "type 2"];

  const addValueType1 = () => {
    if (answerInput.trim()) {
      const updatedAnswers = [...answerAsArray, answerInput];
      setAnswerAsArray(updatedAnswers);
      formik.setFieldValue("picklist", updatedAnswers);
      setAnswerInput("");
    } else {
      showErrorAlert("Please enter an answer before adding.");
    }
  };

  const handleType = (e) => {
    setTypes(e.target.value);
    if (e.target.value === "type 2") {
      setAnswerAsArray([]);
      formik.setFieldValue("picklist", []);
    }
  };

  const removeAnswer = (index) => {
    const updatedAnswers = answerAsArray.filter((_, idx) => idx !== index);
    setAnswerAsArray(updatedAnswers);
    formik.setFieldValue("picklist", updatedAnswers);
  };

  // const clearAllAnswers = () => {
  //   setAnswerAsArray([]);
  //   formik.setFieldValue("picklist", []);
  // };

  const faqsFormValidationSchema = Yup.object().shape({
    question: Yup.string().required("Question is required"),
    category: Yup.string().required("Category is required"),
    type: Yup.string().required("Type is required"),
    description:
      types === "type 2" && Yup.string().required("Description is required"),
  });

  const formik = useFormik({
    initialValues: {
      question: "",
      category: "",
      type: questionTypes.length > 0 ? questionTypes[0] : "",
      picklist: answerAsArray,
      isRequired: false,
      isActive: false,
      description: "",
    },
    validationSchema: faqsFormValidationSchema,
    onSubmit: (values) => {
      if (type === "Add") {
        if (types === "type 1" && answerAsArray.length === 0) {
          showErrorAlert("Please add at least one answer.");
          return;
        }
        createFaqs(values)
          .then(() => {
            showSuccessAlert("FAQs added successfully");
            window.location.reload();
          })
          .catch(() => {
            showErrorAlert("Something went wrong");
          });
      }
    },
  });

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg p-8 my-10">
      <h1 className="text-center text-gray-700 text-2xl font-bold mb-6">
        {type === "Add" ? "Add" : "Update"} FAQs
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-6">
        {/* Question Input */}
        <div>
          <label htmlFor="question" className="block text-gray-600 mb-1">
            Question
          </label>
          <input
            type="text"
            id="question"
            placeholder="Enter your question"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            onChange={formik.handleChange}
            value={formik.values.question}
          />
          {formik.errors.question && formik.touched.question && (
            <p className="text-red-500 text-sm mt-1 flex items-center">
              <FaExclamationCircle className="mr-2" />
              {formik.errors.question}
            </p>
          )}
        </div>

        {/* Category and Type Select */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-gray-600 mb-1">
              Category
            </label>
            <select
              id="category"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              <option value="">Select Category</option>
              {categories.map((category, idx) => (
                <option key={idx} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="type" className="block text-gray-600 mb-1">
              Question Type
            </label>
            <select
              id="type"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              value={types}
              onChange={handleType}
            >
              <option value="">Select Question Type</option>
              {questionTypes.map((type, idx) => (
                <option key={idx} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Conditional Inputs Based on Type */}
        {types === "type 1" && (
          <div>
            <label className="block text-gray-600 mb-1">Answers</label>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Add an answer"
                className="flex-1 p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                value={answerInput}
                onChange={(e) => setAnswerInput(e.target.value)}
              />
              <button
                type="button"
                className="flex items-center bg-blue text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={addValueType1}
              >
                <BsPlusCircle className="mr-2" />
                Add
              </button>
            </div>
            <div className="mt-4">
              {answerAsArray.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray p-3 rounded mb-2"
                >
                  <p className="text-gray-700">{item}</p>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeAnswer(idx)}
                  >
                    <FaTrash />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {types === "type 2" && (
          <div>
            <label htmlFor="description" className="block text-gray-600 mb-1">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter description"
              className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              onChange={formik.handleChange}
              value={formik.values.description}
            ></textarea>
          </div>
        )}

        <button
          type="submit"
          disabled={!types}
          className={`${
            !types
              ? "bg-gray text-zinc-500 cursor-not-allowed"
              : "bg-blue text-white hover:bg-blue-700"
          } w-full py-3 rounded text-lg font-semibold`}
        >
          {type === "Add" ? "Add FAQ" : "Update FAQ"}
        </button>
      </form>
    </div>
  );
};

export default AddFaqs;
