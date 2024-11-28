import { FaPlus } from "react-icons/fa";
import { data2, columns } from "../../utils/staticData";
import { TableRow } from "../../Components";
import { TableHead } from "../../containers";

const WorkflowsPage = () => {
  const btn = [
    {
      icon: <FaPlus />,
      title: "Add workflow",
      className: "bg-blue text-white hover:bg-sky-700",
    },
  ];
  return (
    <main className="flex-1 flex flex-col">
      <TableHead options={[{ filter: true, search: true }]} btn={btn} />
      <TableRow columns={columns} data2={data2} />
    </main>
  );
};

export default WorkflowsPage;
