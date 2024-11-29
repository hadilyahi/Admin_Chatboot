import StyledBtn from "../../Components/UI/StyledBtn";
import { FaTrash } from "react-icons/fa";

const Delete = ({ titelDelete, question }) => {
  return (
    <>
      <h1 className="w-full text-zinc-700 font-bold text-2xl text-center">
        Delete {titelDelete}
      </h1>
      <div className="flex justify-center items-center gap-x-3  rounded p-5">
        <h1 className="text-lg">{question}?</h1>
      </div>
      <div className="w-full grid place-items-center">
        <StyledBtn
          className={
            " bg-red-600 text-white rounded px-3 py-1 self-center gap-x-2 text-lg "
          }
        >
          Delete
          <FaTrash />
        </StyledBtn>
      </div>
    </>
  );
};

export default Delete;
