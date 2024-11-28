import { WORKFLOWS_URL } from "../const";

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