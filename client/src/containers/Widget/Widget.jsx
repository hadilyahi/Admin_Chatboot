import React from "react";

const Widget = () => {
  return (
    <section className="w-full h-full space-y-5">
      <h1 className="text-3xl text-start font-bold">Widget</h1>

      {/* content */}
      <div className="flex flex-col rounded-lg bg-white shadow-lg">
        <div className="">
          <img src={img} alt="" className="w-12 h-12 rounded-full" />
        </div>
        <h1>Lorem ipsum dolor, sit amet consectetur adipisicing.</h1>

        {/* Date */}
        <p className="text-gray">11/11/2024</p>

        {/* Time */}
        <p>11:11:11</p>
      </div>

    </section>
  );
};

export default Widget;
