import { Inputs } from "../../Components";
import { Banner, RightBar, Statistics, Widget } from "../../containers";

const DashboardPage = async () => {
  // toggle rightbar
  // const [isOpen, setIsOpen] = useState(false);

  return (
    // Dashboard.jsx
    <main
      className={`flex-1 duration-500 ease-in`}
    // ${!isOpen ? "px-1 md:px-10" : "px-5md:px-20"}
    >
      <div
        className={`space-y-20 duration-500 ease-in`}
        // ${
        // isOpen ? "md:w-[85%] w-full" : "w-full"
        // }
      >
        <div className="grid place-items-center w-full my-16">
          {/* Search */}
          <Inputs type={"text"} placeholder={"Search"} position={""} />
        </div>
        {/* Banner */}
        <Banner />

        {/* widget */}
        <Widget />

        {/* statistics */}
        <Statistics />
      </div>

      {/* toggle rightbar */}
      {/* <button
        className={`absolute top-[50px] ${
          !isOpen ? "right-0" : "right-[365px]"
        } z-10 duration-500 ease-in bg-blue text-white p-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMdArrowBack className={isOpen ? "rotate-180 duration-500" : ""} />
      </button> */}

      {/* rightbar */}
      <RightBar />
    </main>
  );
};

export default DashboardPage;
