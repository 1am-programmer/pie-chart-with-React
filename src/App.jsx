import React, { useRef } from "react";
import Chart from "chart.js/auto";
import { useEffect } from "react";

const App = () => {
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
            data: [100, 80, 60, 65, 40, 60],
            backgroundColor: [
              "brown",
              "blue",
              "yellow",
              "cyan",
              "red",
              "purple",
            ],
            hoverOffset: 6,
          },
        ],
      },
    });
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="max-w-sm flex justify-center items-center mx-auto ">
      <div className="max-w-sm flex justify-center items-center">
        <canvas ref={chartRef} style={{ width: "500px", height: "500px" }} />
      </div>
    </div>
  );
};

export default App;
