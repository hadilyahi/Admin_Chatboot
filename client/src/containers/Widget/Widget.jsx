import React from "react";

const Widget = () => {
  const widgets = [
    {
      title: "lorem ipsum dolor sit amet consectetur adipiscing elit",
      date: "11/11/2011",
      time: "11:11",
    },
    {
      title: "lorem ipsum dolor sit amet consectetur adipiscing elit",
      date: "22/22/2022",
      time: "22:22",
    },
    {
      title: "lorem ipsum dolor sit amet consectetur adipiscing elit",
      date: "33/33/2023",
      time: "33:33",
    },
  ];

  const img = [
    {
      src: "https://picsum.photos/200",
      alt: "Image 1",
    },
    {
      src: "https://picsum.photos/300",
      alt: "Image 2",
    },
    {
      src: "https://picsum.photos/400",
      alt: "Image 3",
    },
  ];

  return (
    <section className="md:w-[90%] w-full flex flex-col gap-5">
      <h1 className="text-3xl text-start font-bold w-full">Widget</h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-5">
        {widgets.map((widget, index) => (
          <div
            key={index}
            className="flex flex-col rounded-xl bg-white shadow-sm hover:shadow-lg duration-200 px-5 pt-4 pb-2 md:w-[20%] cursor-pointer hover:-translate-y-3"
          >
            {/* Images */}
            <div className="flex relative mb-16">
              {img.map(({ src, alt }, imgIndex) => (
                <img
                  key={imgIndex}
                  src={src}
                  alt={alt}
                  style={{
                    left: `${imgIndex * 16}px`,
                    zIndex: imgIndex + 1,
                  }}
                  className="w-12 h-12 rounded-full absolute"
                />
              ))}
            </div>

            {/* Widget Title */}
            <h1 className="w-[90%] font-bold">{widget.title}</h1>

            {/* Date */}
            <p className="text-zinc-500 my-1 text-[12px]">{widget.date}</p>

            {/* Time */}
            <p className="text-[12px]">
              {widget.time} - {widget.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Widget;
