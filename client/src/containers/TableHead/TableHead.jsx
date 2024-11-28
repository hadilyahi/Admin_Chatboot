import React from "react";
import { FaFilter } from "react-icons/fa";
import StyledBtn from "../../Components/UI/StyledBtn";
import StyledSearchbar from "../../Components/UI/StyledSearchbar";

const TableHead = ({ btn, options, onEdit , onDelete , onAddQuestion}) => {
  return (
    <div className="flex flex-col gap-y-6 p-3 bg-gray sticky top-[50px] z-10 border-b border-zinc-200">
      <div className="flex flex-row justify-between items-stretch overflow-y-hidden  w-full">
        <div className="flex items-stretch gap-2 h-10 w-1/2">
          {options?.map((item, idx) => (
            <React.Fragment key={idx}>
              {item.filter ? (
                <StyledBtn className="shadow border border-gray rounded-lg p-2 bg-white">
                  <FaFilter />
                </StyledBtn>
              ) : null}
              {item.search ? (
                <StyledSearchbar className="shadow border border-gray rounded-lg p-2 bg-white duration-300" />
              ) : null}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-row-reverse items-center justify-center min-h-full gap-x-2">
          {btn.map((item, idx) => (
            <StyledBtn
              onClick={item.title === "Edit" ? onEdit : item.title === "Delete" ? onDelete : item.title === "Add question" ? onAddQuestion : null}
              key={idx}
              className={`flex items-center gap-2 ${item.className} px-4 py-1 h-full rounded-lg text-sm duration-300 hover:shadow-xl`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </StyledBtn>
          ))}
        </div>
      </div>
    </div>
  );
};


export default TableHead;
