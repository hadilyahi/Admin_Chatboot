"use client";

import { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { Inputs, TableRow } from '../../Components';
import StyledBtn from '../../Components/UI/StyledBtn';
import { columnsSearchQuestion, dataSeachQuestion } from '../../utils/staticData';

const AddQuestions = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(dataSeachQuestion);

  const filterData = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = dataSeachQuestion.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(lowerCaseQuery)
      )
    );
    setFilteredData(filtered);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterData(query);
  };

  return (
    <section className="w-[600px] min-h-[700px] max-h-[700px] my-5">
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
      <TableRow
        columns={columnsSearchQuestion}
        data2={filteredData}
        isReadOnly={true}
      />
    </section>
  );
};

export default AddQuestions;
