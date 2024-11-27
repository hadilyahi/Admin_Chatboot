import {
  IoIosNotificationsOutline,
  IoMdArrowBack,
  IoMdArrowRoundForward,
} from "react-icons/io";
import { Card } from "../../Components";

const RightBar = ({ isOpen , setIsOpen  }) => {
  const cards = [
    {
      title: "Lorem ipsum",
      time: "1",
    },
    {
      title: "Lorem ipsum",
      time: "2",
    },
    {
      title: "Lorem ipsum",
      time: "3",
    },
    {
      title: "Lorem ipsum",
      time: "2",
    },
    {
      title: "Lorem ipsum",
      time: "3",
    },
    {
      title: "Lorem ipsum",
      time: "2",
    },
    {
      title: "Lorem ipsum",
      time: "3",
    },
    {
      title: "Lorem ipsum",
      time: "2",
    },
    {
      title: "Lorem ipsum",
      time: "3",
    },
  ];
  return (
    <section
      className={`absolute top-0 z-10 ${
        !isOpen ? "right-3" : "-right-[450px]"
      } duration-500 h-screen w-[70%] md:w-[25%] bg-sky-900 ease-in space-y-10 px-7 overflow-y-scroll`}
    >
      <button
        className={`absolute top-1/2 ${
          isOpen ? "-left-1" : "-left-1 rotate-180"
        } z-30 duration-500 ease-in bg-sky-900 text-white p-2 rounded-full`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMdArrowBack />
      </button>
      <div className="flex items-center justify-end cursor-pointer gap-x-4 p-2 w-full">
        <IoIosNotificationsOutline className="text-2xl text-white" />
        <img
          src="https://picsum.photos/200"
          className="w-10 h-10 rounded-full"
          alt=""
        />
      </div>

      <div className="flex items-center justify-between w-full">
        <h1 className="text-xl text-white">Your Lorem ipsum</h1>
        <p className="flex items-center gap-x-2 cursor-pointer text-yellow  hover:underline hover:text-amber-500 duration-200">
          <samp>more</samp> <IoMdArrowRoundForward />
        </p>
      </div>

      {/* Cards */}
      <div className="w-full space-y-5">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} time={card.time} />
        ))}
      </div>
    </section>
  );
};

export default RightBar;
