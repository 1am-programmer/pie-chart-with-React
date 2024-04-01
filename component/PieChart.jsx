import React, { useRef } from "react";
import Chart from "chart.js/auto";
import { useEffect } from "react";
// Meaning of useRef

const Piechart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");
    //   Meaning of dot current
    chartInstance.current = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  }, []);

  return (
    <div className="max-w-sm flex justify-center items-center">
      <canvas ref={chartRef} style={{ width: "500px", height: "500px" }} />
    </div>
  );
};

export default Piechart;
// ["HTML", "CSS", "JavaScript", "React", "Redux", "Next.js"];
