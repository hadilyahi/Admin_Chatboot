import { IoSearch } from "react-icons/io5"
import StyledBtn from "../../Components/UI/StyledBtn"
import StyledSearchbar from "../../Components/UI/StyledSearchbar"
import { cardData, tableData } from "../../utils/staticData"
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

const FAQsPage = () => {
    return (
        <main className="flex-1 p-3">
            <div className="flex flex-col gap-10 lg:px-20">
                <div className="w-full flex justify-between z-10 bg-gray py-3">
                    <h1 className="text-xl md:text-3xl">FAQs</h1>

                    <StyledSearchbar className={`bg-white rounded-lg p-3 shadow hidden md:flex`} />

                    <StyledBtn className={`bg-white rounded-lg p-3 shadow-md lg:hidden`}>
                        <IoSearch />
                    </StyledBtn>
                </div>

                <div className="w-full bg-white p-10 rounded-lg shadow flex items-center justify-around">
                    {cardData.map((card, idx) => (
                        <div className="flex items-center gap-4" key={idx}>
                            <span className="text-6xl bg-green p-5 rounded-full">
                                {card.icon}
                            </span>

                            <div className="flex flex-col">
                                <h2 className="text-xl text-neutral-400">{card.title}</h2>
                                <p className="text-4xl font-bold">{card.value}</p>

                                <div className="flex items-center text-sm">
                                    <p className={card.status === "up" ? "text-green" : "text-red-500"}>{card.status}</p>
                                    <p className="text-neutral-500">{card.percentage} this mounth</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <Table header={tableHeader} data={tableData} options={tableOptions} sellsStyle={sellsStyle} />
            </div>
        </main>
    )
}

export default FAQsPage