import { FaFilter, FaPlus } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
// import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { tableData } from "../../utils/staticData"
import TableRow from "../../Components/UI/TableRow"
import { BsThreeDotsVertical } from "react-icons/bs"
import StyledBtn from "../../Components/UI/StyledBtn"
import Table from "../../Components/Table"

const tableHeader = {
    id: "#",
    name: "name",
    description: "description",
    status: "status",
    rate: "rate",
    balance: "balance",
    deposit: "deposit",
    currency: "currency",
}

const sellsStyle = {
    id: "w-5 aspect-square flex items-center",
    name: "flex-[0.2]",
    description: "flex-[0.3]",
    status: "flex-[0.2] flex justify-end ",
    rate: "flex-[0.2] flex justify-end",
    balance: "flex-[0.2] flex justify-end",
    deposit: "flex-[0.2] flex justify-center",
    currency: "flex-[0.1] flex justify-end",
}

const tableOptions = {
    search: true,
    filter: true,
    optionsBtn: false,
    checkbox: true,
    new: true,
}

const WorkflowsPage = () => {
    return (
        <main className='flex-1 flex flex-col gap-2'>

            <Table header={tableHeader} data={tableData} options={tableOptions} sellsStyle={sellsStyle} />

            {/* <div className='flex flex-col w-full mx-auto border border-zinc-200 p-5 '>
                <div className='flex flex-col p-3 bg-gray sticky top-[50px] z-10 border-b border-zinc-200'>
                    <div className="flex items-stretch justify-between w-full gap-2">
                        <div className="flex items-stretch gap-2 h-10">
                            <StyledBtn className="shadow border border-gray rounded-lg p-2 bg-white">
                                <FaFilter />
                            </StyledBtn>

                            <div className="flex items-center gap-2 shadow border border-gray rounded-lg p-2 bg-white">
                                <IoSearch />
                                <input type="text" placeholder="Search" className="outline-none" />
                            </div>
                        </div>
                        
                        <StyledBtn className="flex items-center gap-2 bg-blue text-white px-4 py-1 rounded-lg text-sm hover:bg-sky-700 duration-300 hover:shadow-xl">
                            <span>
                                <FaPlus />
                            </span>

                            <span>
                                Add Workflow
                            </span>
                        </StyledBtn>
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

                        <div className="flex-[0.2] flex justify-center">
                            deposit
                        </div>

                        <StyledBtn className={"flex-[0.05] w-5 aspect-square justify-center hover:bg-gray rounded-full"}>
                            <BsThreeDotsVertical />
                        </StyledBtn>
                    </div>
                </div>

                <div className="flex flex-col bg-white">
                {
                        tableData.map((cutomer) => (
                            <TableRow key={cutomer.id} cutomer={cutomer} />
                    ))
                }
                </div>

                {/* this section is for pagination feature will be added in future
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

                </div>
            </div> */}
        </main>
    )
}

export default WorkflowsPage