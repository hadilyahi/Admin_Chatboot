import { IoIosCloseCircleOutline } from "react-icons/io";

const Modals = ({ isOpen, children , onClose }) => {
  return (
    <div
      className={` grid place-items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] p-5
     min-w-full min-h-full bg-zinc-300/50 cursor-not-allowed z-50 ${
       isOpen === true ? "block" : "hidden"
     }`}
    >
       <div className="absolute  top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2  bg-white rounded pt-10 pb-3 px-5 cursor-default">
        <IoIosCloseCircleOutline
          onClick={onClose}
          className="text-3xl absolute top-4 right-4 cursor-pointer "
        />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default Modals;