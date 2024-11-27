"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Statistics = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  const data = [
    { year: "الأحد", count: 30 },
    { year: "الإثنين", count: 45 },
    { year: "الثلاثاء", count: 60 },
  ];

  const lineChartData = [
    { title: "Category", value: 30 },
    { title: "Work Flow", value: 50 },
    { title: "Task", value: 70 },
  ];

  useEffect(() => {
    if (chartRef.current && !chartInstanceRef.current) {
      const ctx = chartRef.current.getContext("2d");
      chartInstanceRef.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: data.map((row) => row.year),
          datasets: [
            {
              label: "Acquisitions by year",
              data: data.map((row) => row.count),
              backgroundColor: "rgba(0, 105, 241, 0.3)",
              borderColor: "rgba(0, 105, 241, 0.8)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          animation: false,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [data]);

  return (
    <section className="w-full space-y-5">
      <h1 className="text-3xl font-bold">Statistics</h1>
      {/* Bar Chart */}
      <div className="flex  flex-col md:flex-row gap-y-6 md:gap-x-10 w-full">
      <div className="w-full md:w-1/2 bg-white rounded-3xl p-3 shadow-md">
        <canvas
          ref={chartRef}
          id="acquisitions"
          aria-label="Acquisitions Chart"
          role="img"
        ></canvas>
      </div>

      {/* Horizontal Bar Chart */}
      <div className="w-full md:w-1/2 bg-slate-200 rounded-3xl shadow-md py-7 divide-y divide-blue">
        {lineChartData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-x-2 px-10 py-3"
          >
            <h1 className="w-1/4 text-xl font-medium">{item.title}:</h1>
            <div className="flex items-center w-3/4 gap-x-2">
              <div className="w-full h-3 bg-gray-300 rounded-full relative">
                <div
                  style={{ width: `${item.value}%` }}
                  className="h-full bg-sky-900 rounded-full"
                ></div>
              </div>
              <h1 className="text-sm font-medium">{item.value}%</h1>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Statistics;
