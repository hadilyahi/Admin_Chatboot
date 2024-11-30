"use client";

import { useEffect, useState } from "react";
import { FaSave } from "react-icons/fa";
import { Inputs, TableRow } from "../../Components";
import StyledBtn from "../../Components/UI/StyledBtn";
import { getFaqs } from "../../utils/api/faqs";

const AddQuestions = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const columns = [
    { key: "displayId", label: "#" },
    { key: "question", label: "question" },
  ];
  
  useEffect(() => {
    getFaqs().then((data) => {
      console.log(data);
      const res = data.data.faqWithSequentialIds;
       const formattingData = res.map((item, index) => ({
        displayId: item.displayId,
        id: item._id,
        question: item.question,
       }))
      setData(formattingData);
    });
  }, []);

  
  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
    setFilteredData(filtered);
  }, [searchQuery, data]);

  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="w-[600px] min-h-[700px] max-h-[700px] overflow-y-hidden my-5">
      <div className="flex justify-between mb-3">
        <Inputs
          className="border border-indigo-700 rounded h-10 px-2"
          search={true}
          placeholder="Search"
          value={searchQuery}
          onchange={handleSearchChange}
        />
        <StyledBtn className="bg-teal-600 text-white rounded px-3 py-1 self-center gap-x-2 text-lg">
          Add <FaSave />
        </StyledBtn>
      </div>
      <TableRow columns={columns} data2={filteredData} isReadOnly={true} />
    </section>
  );
};

export default AddQuestions;