import { FaFilter, FaPlus } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
// import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { tableData } from "../../utils/staticData"

const WorkflowsPage = () => {
    return (
        <main className='flex-1 px-3 flex flex-col gap-2'>
            <h2 className='text-3xl'>Workflows</h2>

            <div className='flex flex-col gap-2 w-[75vw] rounded-lg bg-white mx-auto border border-zinc-200 shadow-lg overflow-hidden'>
                <div className='flex flex-col p-3 bg-gray'>
                    <div className="flex items-stretch justify-between w-full gap-2">
                        <div className="flex items-stretch gap-2 h-10">
                            <button className="shadow border border-gray rounded-lg p-2 bg-white">
                                <FaFilter />
                            </button>

                            <div className="flex items-center gap-2 shadow border border-gray rounded-lg p-2 bg-white">
                                <IoSearch />
                                <input type="text" placeholder="Search" className="outline-none" />
                            </div>
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

                    <div className='flex items-center justify-between pt-3'>
                        <div className="w-5 aspect-square flex items-center">
                            <input type="checkbox" name="selectAll" id="selectAll" />
                        </div>

                        <div className="w-5 aspect-square flex items-center">
                            #
                        </div>

                        <div className="flex-[0.2]">
                            name
                        </div>

                        <div className="flex-[0.3]">
                            description
                        </div>

                        <div className="flex-[0.2] flex justify-end">
                            status
                        </div>

                        <div className="flex-[0.2] flex justify-end">
                            Rate
                        </div>

                        <div className="flex-[0.2] flex justify-end">
                            Balance
                        </div>

                        <div className="flex-[0.2] flex justify-end">
                            deposit
                        </div>
                    </div>
                </div>

                <div className="flex flex-col max-h-80 overflow-auto">
                {
                        tableData.map((cutomer) => (
                            <div key={cutomer.id} className='flex items-start justify-between border border-zinc-200 p-3'>
                                <div className="w-5 aspect-square flex items-center">
                                    <input type="checkbox" name="selectAll" id="selectAll" />
                                </div>

                                <div className="w-5 aspect-square flex items-center">
                                    {cutomer.id}
                                </div>

                                <div className="flex-[0.2]">
                                    {cutomer.name}
                                </div>

                                <div className="flex-[0.3]">
                                    {cutomer.description}
                                </div>

                                <div className="flex-[0.2] flex justify-end">
                                    <span className={`px-2 py-1 text-white rounded-full ${cutomer.status === "Paid" && "bg-green"} ${cutomer.status === "Unpaid" && "bg-red"} ${cutomer.status === "Open" && "bg-yellow"} ${cutomer.status === "Inactive" && "bg-gray"} ${cutomer.status === "Due" && "bg-red-800"}`}>
                                        {cutomer.status}
                                    </span>
                                </div>

                                <div className="flex-[0.2] flex justify-end">
                                    {cutomer.rate}
                                </div>

                                <div className="flex-[0.2] flex justify-end">
                                    {cutomer.balance}
                                </div>

                                <div className="flex-[0.2] flex justify-end">
                                    {cutomer.deposit}
                                </div>
                            </div>
                    ))
                }
                </div>

                {/* this section is for pagination feature will be added in future */}
                {/* <div className="flex items-center justify-between p-3 bg-gray">
                    <span>1-10 of 100</span>

                    <div className="flex items-center gap-2">
                        <span>rows per page 10</span>

                        <div className="flex items-center gap-2">
                            <button className="border border-gray px-3 py-1 rounded-lg bg-white shadow">
                                <MdOutlineKeyboardArrowLeft />
                            </button>
                            <span>1/10</span>
                            <button className="border border-gray px-3 py-1 rounded-lg bg-white shadow">
                                <MdKeyboardArrowRight />
                            </button>
                        </div>
                    </div>

                </div> */}
            </div>
        </main>
    )
}

export default WorkflowsPage