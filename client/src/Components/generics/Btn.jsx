import React from "react";

const Btn = ({ iconTag, titel}) => {
  return (
    <button className="flex items-center gap-2 bg-sky-900 hover:bg-blue hover:shadow-xl duration-200 text-white px-4 py-1 rounded text-sm">
      <span>
        {iconTag}
      </span>
      <span>{titel}</span>
    </button>
  );
};

export default Btn;
