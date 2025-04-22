"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  ChartOptions,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useRef, useEffect, useState } from "react";
import { Chart as ChartJSInstance } from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export default function MonthlyChart() {
  const chartRef = useRef<ChartJSInstance<"line"> | null>(null);
  const [gradientOnline, setGradientOnline] = useState<CanvasGradient | null>(
    null
  );
  const [gradientStore, setGradientStore] = useState<CanvasGradient | null>(
    null
  );

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) return;

    const ctx = chart.ctx;

    const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient1.addColorStop(0, "rgba(0,123,255,0.4)");
    gradient1.addColorStop(1, "rgba(0,123,255,0)");

    const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
    gradient2.addColorStop(0, "rgba(255,193,7,0.4)");
    gradient2.addColorStop(1, "rgba(255,193,7,0)");

    setGradientOnline(gradient1);
    setGradientStore(gradient2);
  }, []);

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Online",
        data: [3, 10, 6, 15, 12, 30],
        fill: true,
        backgroundColor: gradientOnline ?? "rgba(0,123,255,0.1)",
        borderColor: "rgba(0,123,255,1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(0,123,255,1)",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
      {
        label: "Store",
        data: [5, 12, 8, 20, 10, 18],
        fill: true,
        backgroundColor: gradientStore ?? "rgba(255,193,7,0.1)",
        borderColor: "rgba(255,193,7,1)",
        tension: 0.4,
        pointBackgroundColor: "rgba(255,193,7,1)",
        pointBorderColor: "#fff",
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 5,
        },
        border: {
          display: false,
        },
        grid: {
          color: "rgba(0,0,0,0.1)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="w-full h-[300px]">
      <div className="flex justify-between mb-4">
        <ul className="flex gap-4 ml-8">
          <li className="text-xs cursor-pointer text-gray-400 uppercase hover:border-b-2 hover:border-pink-600 hover:text-pink-600">
            DAILY
          </li>
          <li className="text-xs cursor-pointer text-gray-400 uppercase hover:border-b-2 hover:border-pink-600 hover:text-pink-600">
            weEKLY
          </li>
          <li className="text-xs cursor-pointer text-gray-400 uppercase hover:border-b-2 hover:border-pink-600 hover:text-pink-600">
            Monthly
          </li>
          <li className="text-xs cursor-pointer text-gray-400 uppercase hover:border-b-2 hover:border-pink-600 hover:text-pink-600">
            yearly
          </li>
        </ul>

        <div className="flex gap-3">
          <p className="text-gray-400 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-400 mr-1"></span>
            Online
          </p>
          <p className="text-gray-400 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-1"></span>
            Store
          </p>
        </div>
      </div>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
}
