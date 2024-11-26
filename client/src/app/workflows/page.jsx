import { FaFilter, FaPlus } from "react-icons/fa"

const WorkflowsPage = () => {
    return (
        <main className='flex-1 px-3 flex flex-col gap-2'>
            <h2 className='text-3xl'>Workflows</h2>

            <div className='flex flex-col gap-2 min-w-96 rounded-lg bg-white mx-auto border border-gray shadow'>
                <div className='flex items-center justify-between p-3'>
                    <div className="flex items-center gap-2">
                        <button>
                            <FaFilter />
                        </button>

                        <input type="text" placeholder="Search" />
                    </div>

                    <button className="flex items-center gap-2 bg-blue text-white px-4 py-1 rounded text-sm">
                        <span>
                            <FaPlus />
                        </span>

                        <span>
                            Add Workflow
                        </span>
                    </button>
                </div>

                {
                    Array.from({ length: 10 }).map((_, i) => (
                        <div key={i}>
                            <h3 className='text-2xl'>Workflow {i + 1}</h3>
                        </div>
                    ))
                }
            </div>
        </main>
    )
}

export default WorkflowsPage