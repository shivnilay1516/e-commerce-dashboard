"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: [],
  datasets: [
    {
      label: "Activity Breakdown",
      data: [55, 33, 12],
      backgroundColor: [
        "rgb(246, 66, 136)",
        "rgb(128, 0, 128)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 2,
    },
  ],
};
const options = {
  cutout: "70%",
};

export default function DoughnutChart() {
  return (
    <div className="flex-shrink-0 w-full sm:basis-[100%] sm:w-[100%] md:basis-[100%] md:w-[100%] lg:basis-[30%] lg:w-[30%]">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:my-0 md:my-3 sm:my-2 my-2">
        <h2 className="text-base mb-4">Traffic</h2>
        <div className="flex justify-center my-10 py-4">
          <div style={{ width: 200, height: 200 }}>
            <Doughnut data={data} options={options} />
          </div>
        </div>
        <div className="flex justify-between mt-8 pt-4">
          <div className="w-1/3 text-center">
            <h3 className="text-2xl text-gray-700 font-semibold">33%</h3>
            <p className="text-gray-400 text-xs">
              {" "}
              <span className="inline-block w-2 h-2 rounded-full bg-purple-800 mr-1"></span>
              Facebook
            </p>
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-2xl text-gray-700 font-semibold">55%</h3>
            <p className="text-gray-400 text-xs">
              {" "}
              <span className="inline-block w-2 h-2 rounded-full bg-pink-600 mr-1"></span>
              Youtube
            </p>
          </div>
          <div className="w-1/3 text-center">
            <h3 className="text-2xl text-gray-700 font-semibold">12%</h3>
            <p className="text-gray-400 text-xs">
              {" "}
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-600 mr-1"></span>
              Direct Search
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
