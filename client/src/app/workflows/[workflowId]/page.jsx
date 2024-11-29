import { tableData } from "../../../utils/staticData";
import { WorkFlowDetails } from "../../../containers";
import { getQuestuonByWorkflowId } from "../../../utils/api/workflows";

const WorkflowPage = async ({ params }) => {
  const workflowId = (await params).workflowId;

  // fetch workflow from database
  // const workflows = await fetch()..

  // this is just for demo

  return <WorkFlowDetails />;
};

export default WorkflowPage;
