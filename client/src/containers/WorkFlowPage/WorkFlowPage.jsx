"use client";
import React,{ useState} from "react";
import { FaPlus } from "react-icons/fa";
import { data2, columns } from "../../utils/staticData";
import { TableRow } from "../../Components";
import { AddWorkFlow, Modals, TableHead } from "../../containers";

const WorkFlowPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const btn = [
    {
      icon: <FaPlus />,
      title: "Add workflow",
      className: "bg-blue text-white hover:bg-sky-700",
    },
  ];
  return (
    <main className="flex-1 flex flex-col">
      <TableHead options={[{ filter: true, search: true }]} btn={btn} onAddWorkflow={() => setIsOpen(true)} />
      <TableRow columns={columns} data2={data2} />
      <Modals isOpen={isOpen} onClose={onClose}>
        <AddWorkFlow />
      </Modals>
    </main>
  );
};

export default WorkFlowPage;
