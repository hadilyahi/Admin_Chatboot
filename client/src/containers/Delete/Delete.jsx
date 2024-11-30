import { Inputs } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";
import { FaTrash } from "react-icons/fa";

const Delete = ({ titelDelete, question , onDelete , value , onchange}) => {
  return (
    <>
      <h1 className="w-full text-zinc-700 font-bold text-2xl text-center">
        Delete {titelDelete}
      </h1>
      <div className="flex justify-center items-center gap-x-3  rounded p-5">
        <h1 className="text-lg">{question}?</h1>
      </div>
      <Inputs
        type="text"
        placeholder={"asdasdasd"}
        value={value}
        onchange={onchange}
        />
      <div className="w-full grid place-items-center">
        <StyledBtn
        onclick={onDelete}
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
