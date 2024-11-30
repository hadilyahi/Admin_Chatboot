import { GET_ONE_WORKFLOW_URL, WORKFLOWS_URL , CREATE_WORKFLOW_URL } from "../const";

export const getWorkflows = async () => {
    try {
        const response = await fetch(WORKFLOWS_URL , {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const getQuestuonByWorkflowId = async (workflowId) => {
    try {
        const response = await fetch(`${GET_ONE_WORKFLOW_URL}/${workflowId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
};

export const createWorkflow = async (data) =>{
    try{
        const response = await fetch(CREATE_WORKFLOW_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const data2 = await response.json();
        return data2;
    }catch(error){
        console.error(error);
    }
}