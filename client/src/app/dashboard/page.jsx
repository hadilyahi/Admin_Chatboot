import { Inputs } from "../../Components"

const DashboardPage = () => {
    return (
        <main className="w-[70vw]">
            <div className="grid place-items-center w-full my-20">
            <Inputs type={"text"} placeholder={"Search"} position={""} />               
            </div>
        </main>
    )
}

export default DashboardPage