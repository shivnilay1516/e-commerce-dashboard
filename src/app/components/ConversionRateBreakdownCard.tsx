import React from "react";

interface Item {
  label: string;
  percentage: number;
  value: number;
  delta: number;
}

interface Props {
  totalRate: number;
  items: Item[];
}

const ConversionRateBreakdownCard: React.FC<Props> = ({ totalRate, items }) => {
  return (
    <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
      <h3 className="text-sm font-medium text-gray-600 mb-4">
        Conversion rate breakdown
      </h3>
      <div className="text-2xl font-bold text-pink-600 mb-4">
        {totalRate}% <span className="font-normal">—</span>
      </div>
      <div className="flex justify-between gap-4 text-xs text-gray-500">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex-1 text-center ${
              idx !== 0 ? "border-l" : ""
            } border-gray-300`}
          >
            <div className="font-semibold text-sm truncate">{item.label}</div>
            <div className="text-sm font-bold text-gray-600">
              {item.percentage}%{" "}
              <span className="font-normal">{item.value}</span>
            </div>
            <div className="text-gray-400 text-xs">↘ {item.delta}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversionRateBreakdownCard;
