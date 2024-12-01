"use client";
import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { TableRow } from "../../Components";
import { AddWorkFlow, Modals, TableHead, UpdateWorkflow } from "../../containers";
// api
import { getWorkflows } from "../../utils/api/workflows";
import { showErrorAlert } from "../../utils/alert";
import Delete from "../Delete/Delete";

const WorkFlowPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isAddCatrgotyOpen, setIsAddCatrgotyOpen] = useState(false);
  const [data, setData] = useState([]);

  const columns = [
    { key: "_id", label: "#" },
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "status", label: "Status", isStatus: true }, // Special handling for the status column
    { key: "created_at", label: "created_at" },
    { key: "updated_at", label: "updated_at" },
    { key: "last_run", label: "last_run" },
  ];

  const onClose = () => {
    setIsOpen(false);
    setIsEditOpen(false);
    setIsDeleteOpen(false);
    setIsAddCatrgotyOpen(false);
  };

  const onEditeWorkflow = (id) => {
    if (id) {
      setIsEditOpen(true);
    } else {
      showErrorAlert("error in edite workflow");
    }
  };

  const onDeleteWorkflow = (id) => {
    if (id) {
      setIsDeleteOpen(true);
    } else {
      showErrorAlert("error in delete workflow");
    }
  };

  const btn = [
    {
      icon: <FaPlus />,
      title: "Add workflow",
      className: "bg-cyan-800 text-white hover:bg-sky-700",
    },
  ];

  // fetch workflows
  useEffect(() => {
    getWorkflows()
      .then((data) => {
        const formattingData = data.data.workflows.map((workflow) => ({
          id: workflow._id,
          _id: workflow.displayId,
          name: workflow.name,
          description: workflow.description,
          status: workflow.status,
          created_at: new Date(workflow.createdAt).toLocaleDateString(), // Format date here
          updated_at: new Date(workflow.updatedAt).toLocaleDateString(),
          deposit: "/",
          workflowId: workflow.id,
        }));
        setData(formattingData);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <main className="flex-1 flex flex-col">
      <TableHead
        options={[{ filter: true, search: true }]}
        btn={btn}
        onAddWorkflow={() => setIsOpen(true)}
        
      />

      <TableRow
        columns={columns}
        data2={data}
        onEdit={onEditeWorkflow}
        onDelete={onDeleteWorkflow}
        path={"/workflows"}
        
      />
      {/* add workflow */}
      <Modals isOpen={isOpen} onClose={onClose}>
        <AddWorkFlow type="Add" />
      </Modals>

      {/* update workflow */}
      <Modals isOpen={isEditOpen} onClose={onClose}>
        <UpdateWorkflow type="Update" />
      </Modals>

      {/* delete workflow */}
      <Modals isOpen={isDeleteOpen} onClose={onClose}>
        <Delete
          titelDelete={"workflow"}
          question={"Are you sure to delete this workflow ?"}
        />
      </Modals>

      {/* add category */}
      <Modals isOpen={isAddCatrgotyOpen} onClose={onClose}>
        <AddWorkFlow type="Add" />
      </Modals>
    </main>
  );
};

export default WorkFlowPage;
