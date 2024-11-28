import { tableData } from "../../../utils/staticData";
import { WorkFlowDetails } from "../../../containers";

const WorkflowPage = async ({ params }) => {
  const workflowId = (await params).workflowId;

  // fetch workflow from database
  // const workflows = await fetch()..

  // this is just for demo
  if (!workflowId || !tableData) {
    return (
      <main className="flex-1">
        <div className="flex flex-col items-start gap-5 p-20">
          <div className="w-full rounded-xl bg-white shadow-md p-5">
            <h1 className="text-3xl font-bold">Workflow not found</h1>
          </div>
        </div>
      </main>
    );
  }

  const workflow = tableData.find(
    (workflow) => workflow.id === parseInt(workflowId)
  );

  return (
    <main className="flex-1">
      <div className="flex flex-col items-start gap-5 p-20">
        <div className="w-full rounded-xl bg-white shadow-md p-5">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">{workflow.name}</h1>

            <div className="flex items-center justify-between">
              <p className="text-sm">Updated: 1 day ago</p>
            </div>
          </div>

          <p>{workflow.description}</p>
        </div>

      </div>
        <WorkFlowDetails />
    </main>
  );
};

export default WorkflowPage;
