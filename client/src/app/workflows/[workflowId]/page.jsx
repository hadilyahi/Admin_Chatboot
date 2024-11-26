import React from 'react'

const WorkflowPage = ({ params }) => {
    const { workflowId } = params;

    return (
        <main>
            <h1>Workflow {workflowId}</h1>
        </main>
    )
}

export default WorkflowPage