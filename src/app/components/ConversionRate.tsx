import React from "react";

interface ConversionRateProps {
  value: number;
  date: string;
  dataPoints: number[]; // e.g., [0, 1, 0.5, 0, 0]
  maxValue?: number; // optional, default is 10
}

const ConversionRate: React.FC<ConversionRateProps> = ({
  value,
  date,
  dataPoints,
  maxValue = 10,
}) => {
  return (
    <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
      <h3 className="text-sm font-medium text-gray-600 mb-4">
        Sessions by location
      </h3>
      <div className="text-2xl font-semibold text-gray-600 mb-2">
        {value.toFixed(2)}% —
      </div>
      <div className="flex flex-col my-auto">
        <div className="relative h-[100px] w-full border-t border-gray-200">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            <polyline
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              points={dataPoints
                .map((val, i) => {
                  const x = (i / (dataPoints.length - 1)) * 100;
                  const y = 100 - (val / maxValue) * 100;
                  return `${x},${y}`;
                })
                .join(" ")}
            />
          </svg>
          <div className="absolute top-0 left-0 text-xs text-gray-400">
            ₹{maxValue}
          </div>
          <div className="absolute bottom-0 left-0 text-xs text-gray-400">
            ₹0
          </div>
        </div>

        {/* X-axis labels */}
        <div className="flex justify-between text-xs text-gray-500 mt-2">
          <span>12 am</span>
          <span>6 am</span>
          <span>12 pm</span>
          <span>6 pm</span>
        </div>
      </div>

      {/* Date */}
      <div className="mt-3 text-xs text-blue-500 text-center">{date}</div>
    </div>
  );
};

export default ConversionRate;
