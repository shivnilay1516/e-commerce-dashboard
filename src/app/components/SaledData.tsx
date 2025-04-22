"use client";

import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SalesData {
  time: string;
  amount: number;
}

interface Breakdown {
  [key: string]: string;
}

export default function SaledData() {
  const [salesData, setSalesData] = useState<SalesData[]>([]);
  const [breakdown, setBreakdown] = useState<Breakdown>({});

  useEffect(() => {
    setSalesData([
      { time: "12 am", amount: 0 },
      { time: "3 am", amount: 0 },
      { time: "6 am", amount: 0 },
      { time: "9 am", amount: 0 },
      { time: "12 pm", amount: 0 },
      { time: "3 pm", amount: 0 },
      { time: "6 pm", amount: 0 },
      { time: "9 pm", amount: 0 },
    ]);

    setBreakdown({
      "Gross sales": "₹0.00",
      Discounts: "₹0.00",
      Returns: "₹0.00",
      "Net sales": "₹0.00",
      "Shipping charges": "₹0.00",
      "Return fees": "₹0.00",
      Taxes: "₹0.00",
      "Total sales": "₹0.00",
    });
  }, []);

  return (
    <div className="mb-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Chart Section */}
        <div className="col-span-2 bg-gray-50 p-4 rounded border border-gray-300">
          <h3 className="text-sm font-medium text-gray-600 border-b border-gray-300 pb-2 mb-2">
            Total sales over time
          </h3>
          <p className="text-2xl font-semibold text-gray-600">₹0</p>
          <div className="h-64 border-t border-b border-gray-300 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#3b82f6"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-400 flex justify-between mt-2">
            {salesData.map((item, idx) => (
              <span key={idx}>{item.time}</span>
            ))}
          </div>
        </div>

        {/* Breakdown Section */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-sm font-medium text-gray-600 border-b border-gray-300 pb-2 mb-3">
            Total sales breakdown
          </h3>
          <ul className="space-y-4 text-sm text-gray-600">
            {Object.entries(breakdown).map(([label, value], idx) => (
              <li
                key={idx}
                className={`flex justify-between ${
                  idx < Object.entries(breakdown).length - 1
                    ? "border-b border-gray-300 pb-1"
                    : "font-semibold"
                }`}
              >
                <span className="text-gray-400">{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
