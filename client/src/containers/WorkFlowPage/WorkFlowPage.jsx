"use client";
import React,{ useState , useEffect} from "react";
import { FaPlus } from "react-icons/fa";
import { TableRow } from "../../Components";
import { AddWorkFlow, Modals, TableHead } from "../../containers";
import { showSuccessAlert } from "../../utils/alert";
// api
import { getWorkflows } from "../../utils/api/workflows";

const WorkFlowPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data , setData] = useState([])
  const columns = [
    { key: "displayId", label: "#" },
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
    { key: "status", label: "Status", isStatus: true }, // Special handling for the status column
    { key: "rate", label: "Rate" },
    { key: "balance", label: "Balance" },
    { key: "deposit", label: "Deposit" },
  ];

  const onClose = () => setIsOpen(false);
  const btn = [
    {
      icon: <FaPlus />,
      title: "Add workflow",
      className: "bg-blue text-white hover:bg-sky-700",
    },
  ];

  useEffect(() => {
    console.log("before")
    getWorkflows()
    .then((data)=>{
      console.log(data)
      const formattingData = data.data.workflows.map((workflow) => ({
        id: workflow.displayId,
        name: workflow.name,
        description: workflow.description,
        status: workflow.status,
        rate: "/",
        balance: "/",
        deposit: "/",
        workflowId : workflow.id
      }))
      console.log(data.data.workflows);
      setData(formattingData)
    }).catch((error) => console.log(error))
  } , [])
  return (
    <main className="flex-1 flex flex-col">
      <TableHead options={[{ filter: true, search: true }]} btn={btn} onAddWorkflow={() => setIsOpen(true)} />
      <TableRow columns={columns} data2={data} />
      <Modals isOpen={isOpen} onClose={onClose}>
        <AddWorkFlow />
      </Modals>
    </main>
  );
};

export default WorkFlowPage;