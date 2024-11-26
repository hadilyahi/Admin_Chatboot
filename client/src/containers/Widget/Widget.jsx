import React from "react";

const Widget = () => {
  const widgets = [
    {
      title: "Title 1",
      date: "Date 1",
      time: "Time 1",
    },
    {
      title: "Title 2",
      date: "Date 2",
      time: "Time 2",
    },
    {
      title: "Title 3",
      date: "Date 3",
      time: "Time 3",
    },
  ];
  return (
    <section className="w-full h-full space-y-5">
      <h1 className="text-3xl text-start font-bold">Widget</h1>

      {/* content */}
      <div className="flex gap-x-5">
        {widgets.map((widget, index) => (
          <div key={index} className="flex flex-col rounded-lg bg-white shadow-lg">
            <div className="">
              <img
                src="https://picsum.photos/200"
                alt=""
                className="w-12 h-12 rounded-full"
              />
            </div>
            <h1>{widget.title}</h1>

            {/* Date */}
            <p className="text-gray">{widget.date}</p>

            {/* Time */}
            <p>{widget.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Widget;
