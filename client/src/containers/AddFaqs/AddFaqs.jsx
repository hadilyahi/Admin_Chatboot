"use client";

import React, { useState, useEffect } from "react";
import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";
import { BsMotherboardFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup"; // Import Yup for validation
import { createFaqs } from "../../utils/api/faqs";
import { showErrorAlert, showSuccessAlert }  from "../../utils/alert";

const AddFaqs = ({ type, data }) => {
  const [types, setTypes] = useState("");
  const [answerAsArray, setAnswerAsArray] = useState([]);
  const [answerInput, setAnswerInput] = useState("");

  const categories = ["Category 1", "Category 2", "Category 3"];
  const questionTypes = ["type 1", "type 2"];

  // Add Answer Logic (Updated to use callback in setState)
  const addValueType1 = () => {
    if (answerInput.trim()) {
      const updatedAnswers = [...answerAsArray, answerInput];
      setAnswerAsArray(updatedAnswers);
      formik.setFieldValue("picklist", updatedAnswers);  // Update Formik's picklist
      setAnswerInput(""); // Clear input after adding
    } else {
      alert("Please enter an answer before adding.");
    }
  };

  const handleType = (e) => {
    setTypes(e.target.value);
    if (e.target.value === "type 2") {
      setAnswerAsArray([]); // Clear answers if question type changes to type 2
      formik.setFieldValue("picklist", []); // Also clear picklist in Formik
    }
  };

  const removeAnswer = (index) => {
    const updatedAnswers = answerAsArray.filter((_, idx) => idx !== index);
    setAnswerAsArray(updatedAnswers);
    formik.setFieldValue("picklist", updatedAnswers);  // Update Formik's picklist
  };

  const clearAllAnswers = () => {
    setAnswerAsArray([]);
    formik.setFieldValue("picklist", []);  // Clear picklist in Formik
  };

  const faqsFormValidationSchema = Yup.object().shape({
    question: Yup.string().required("Question is required"),
    category: Yup.string().required("Category is required"),
    type: Yup.string().required("Type is required"),
    // picklist: types === "type 1" ? Yup.array().required("Picklist is required") : Yup.array().notRequired(),
    description: types === "type 2" && Yup.string().required("Description is required") //: Yup.string().notRequired(),
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
      if (type === "Update") {
        // Update logic (if applicable)
      } else if (type === "Add") {
        if (types === "type 2") {
          createFaqs(values)
            .then((res) => {
              showSuccessAlert("FAQs added successfully");
              window.location.reload();
            })
            .catch((err) => {
              console.log(err);
              showErrorAlert("Something went wrong");
            });
        } else if (types === "type 1") {
          if (answerAsArray.length === 0) {
            showErrorAlert("Please add at least one answer");
          } else {
            createFaqs(values)
              .then((res) => {
                showSuccessAlert("FAQs added successfully");
                window.location.reload();                
              })
              .catch((err) => {
                console.log(err);
                showErrorAlert("Something went wrong");
              });
          }
        }
      }
    },
    
  });

  useEffect(() => {
    if (type === "Update") {
      // Update logic based on "data" if necessary
    }
  }, [type, data]);

  console.log("Formik Values:", formik.values);
  console.log("answerAsArray:", answerAsArray);

  return (
    <form onSubmit={formik.handleSubmit} className="md:mx-auto my-10">
      <h1 className="text-center text-zinc-700 text-2xl font-bold">
        {type === "Add" ? "Add" : "Update"} FAQs
      </h1>

      <Inputs
        type="text"
        placeholder="Question"
        position="my-3"
        onchange={formik.handleChange}
        value={formik.values.question}
        className="p-3 border border-gray rounded"
        id="question"
      />
      {formik.errors.question && formik.touched.question && (
        <p className="text-red-500 text-sm">{formik.errors.question}</p>
      )}
      <div className="grid grid-cols-2 gap-x-3">
        <select
          id="category"
          className="w-full p-3 border border-zinc-200 rounded my-3"
          value={formik.values.category}
          onChange={formik.handleChange}
        >
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        {formik.errors.category && formik.touched.category && (
          <p className="text-red-500 text-sm">{formik.errors.category}</p>
        )}
        <select
          id="type"
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
        {formik.errors.type && formik.touched.type && (
          <p className="text-red-500 text-sm">{formik.errors.type}</p>
        )}
      </div>

      {types === "type 1" ? (
        <>
          <div className="grid grid-cols-3 gap-x-3 items-center">
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
              type="button"
              className="bg-blue text-white rounded px-3 mx-5 md:mx-10 py-1 flex items-center justify-center duration-300 hover:bg-cyan-900 hover:shadow-xl text-lg"
              onClick={addValueType1}
            >
              <BsMotherboardFill className="mr-1" />
              Add
            </button>
            <button
              type="button"
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
      ) : types === "type 2" ? (
        <>
        <textarea
          id="description"
          cols="10"
          rows="10"
          placeholder="Description"
          className="w-full p-3 border border-zinc-200 rounded my-3"
        ></textarea>
        {formik.errors.description && formik.touched.description && (
          <p className="text-red-500 text-sm">{formik.errors.description}</p>
        )}
        </>
      ) : (
        <div className="my-3 mx-5">
          <h1 className="text-red-500 text-2xl">you should select a question type to continue ...</h1>
        </div>
        )}

      <StyledBtn type={"submit"} isDisabled={!types ? true: false}  className={`${!types ? "bg-gray text-black cursor-not-allowed": "bg-blue text-white hover:bg-cyan-900 hover:shadow-xl"} rounded px-5 mx-2 md:mx-10 py-1 w-fit flex justify-center duration-300  text-lg`}>
        {type === "Add" ? "Validate" : "Update"}
      </StyledBtn>
    </form>
  );
};

export default AddFaqs;
