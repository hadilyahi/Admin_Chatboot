"use client";
import React, { useState, useEffect } from "react";
import { FaEdit, FaPlus, FaSave, FaTrash } from "react-icons/fa";
import { Inputs, TableRow } from "../../Components";
import { AddQuestions, Modals, TableHead } from "../../containers";
import { data3 } from "../../utils/staticData";
import StyledBtn from "../../Components/UI/StyledBtn";
import { showErrorAlert, showSuccessAlert } from "../../utils/alert";
import { useParams, useRouter } from "next/navigation";
import { getQuestuonByWorkflowId } from "../../utils/api/workflows";

const WorkFlowDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAddQuestionOpen, setIsAddQuestionOpen] = useState(false);
  const [isDeleteQuestionOpen, setIsDeleteQuestionOpen] = useState(false);
  const [rowId, setRowId] = useState(null);
  const [data, setData] = useState([]);
  const [workflowData, setWorkflowData] = useState({});

  const columns = [
    { key: "id", label: "#" },
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "type", label: "Type" },
    // { key: "isRequired" , label: "Required" },
    { key: "createdAt", label: "Created At" },
    { key: "updatedAt", label: "Updated At" },
    // { key: "isSkipped" , label: "Skipped" },
    // { key: "questionsOrder" , label: "Q.O" },
  ];

  const onSelectRow = (id) => setRowId((prev) => (prev === id ? null : id));
  const onEdit = () => {
    if (rowId) {
      setIsOpen(true);
    } else {
      showErrorAlert("you should be select a row");
    }
  };
  const { workflowId } = useParams();
  console.log(workflowId);
  useEffect(() => {
    getQuestuonByWorkflowId(workflowId)
      .then((data) => {
        // const formattingData = data.data.workflow.questions.map((ques) => ({
        //       id: ques._id,
        //       name: ques.name,
        //       description: ques.description,
        //       type: ques.category,
        //       createdAt: ques.createdAt,
        //       updatedAt: ques.updatedAt,
        //     }))

        // setData(formattingData);
        console.log(data);
        setWorkflowData(data.data.workflow);
      })

      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onDelete = () => {
    if (rowId) {
      setIsDeleteQuestionOpen(true);
    } else {
      showErrorAlert("you should be select a row");
    }
  };
  const onAddQuestion = () => setIsAddQuestionOpen(true);

  const onClose = () => {
    setIsOpen(false);
    setIsAddQuestionOpen(false);
    setIsDeleteQuestionOpen(false);
  };

  const btn = [
    {
      icon: <FaPlus />,
      title: "Add question",
      className: "bg-blue text-white hover:bg-sky-700",
    },
    {
      icon: <FaTrash />,
      title: "Delete",
      className: "bg-red-600 text-white hover:bg-red-700",
    },
    {
      icon: <FaEdit />,
      title: "Edit",
      className: "bg-yellow text-white hover:bg-yellow",
    },
  ];
  return (
    <main className="flex-1">
      <div className="flex flex-col items-start gap-5 p-20">
        <div className="w-full rounded-xl bg-white shadow-md p-5">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{workflowData.name}</h1>

            <div className="flex items-center justify-between">
              <p className="text-sm">{workflowData.updatedAt}</p>
            </div>
          </div>

          <p>{workflowData.description}</p>
        </div>

        <div className="w-full rounded-xl  shadow-md">
          <TableHead
            options={[{ filter: true, search: true }]}
            btn={btn}
            onEdit={onEdit}
            onDelete={onDelete}
            onAddQuestion={onAddQuestion}
          />

          <TableRow
            columns={columns}
            data2={data}
            isReadOnly={true}
            getRowId={onSelectRow}
            rowId={rowId}
          />
        </div>
        {/* Edit Modal */}
        <Modals isOpen={isOpen} onClose={onClose}>
          <h1 className="w-full text-zinc-700 font-bold text-2xl text-center">
            Change The Order
          </h1>
          <div className="flex justify-center items-center gap-x-3  rounded p-5">
            <h1 className="text-lg">{rowId}</h1>
            <p>To</p>
            <Inputs
              search={false}
              type={"text"}
              className={"border-cyan-700 border px-1"}
              placeholder={"enter the order"}
              isFocus={true}
            />
          </div>
          <div className="w-full grid place-items-center">
            <StyledBtn
              className={
                "bg-teal-600 text-white rounded px-3 py-1 self-center gap-x-2 text-lg"
              }
            >
              Submit
              <FaSave />
            </StyledBtn>
          </div>
        </Modals>

        {/* Add Question */}
        <Modals isOpen={isAddQuestionOpen} onClose={onClose}>
          <AddQuestions />
        </Modals>
        {/* Delete Question */}
        <Modals isOpen={isDeleteQuestionOpen} onClose={onClose}>
          <h1 className="w-full text-zinc-700 font-bold text-2xl text-center">
            Delete Question
          </h1>
          <div className="flex justify-center items-center gap-x-3  rounded p-5">
            <h1 className="text-lg">
              Are you sure you want to delete this question ?
            </h1>
          </div>
          <div className="w-full grid place-items-center">
            <StyledBtn
              className={
                " bg-red-600 text-white rounded px-3 py-1 self-center gap-x-2 text-lg "
              }
            >
              Delete
              <FaTrash />
            </StyledBtn>
          </div>
        </Modals>
      </div>
    </main>
  );
};

export default WorkFlowDetails;
