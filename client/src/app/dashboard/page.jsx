import { Inputs } from "../../Components"
import { Banner, Widget } from "../../containers"

const DashboardPage = () => {

    return (
        // Dashboard.jsx
        <main className="flex-1">
            <div className="grid place-items-center w-full my-20 space-y-10">

            {/* Search */}
            <Inputs type={"text"} placeholder={"Search"} position={""} />               
            
            {/* Banner */}
            <Banner />

            {/* widget */}
             <Widget />
            </div>
        </main>
    )
}

export default DashboardPage