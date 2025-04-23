import React from "react";
import Link from "next/link";
import { FiMaximize2 } from "react-icons/fi";
import SaledData from "./SaledData";
import AverageOrderValueCard from "./AverageOrderValueCard";
import SessionsOverTime from "./SessionsOverTime";
import ConversionRate from "./ConversionRate";
import ConversionRateBreakdownCard from "./ConversionRateBreakdownCard";

const Analytics = () => {
  return (
    <div className="overflow-scroll md:overscroll-none w-full md:w-auto m-0 sm:m-1 md:m-2 lg:m-3">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:m-0 md:m-3 sm:m-2 m-2">
        <div className="mb-8 flex justify-between">
          <h3 className="font-medium">Analytics</h3>
          <div className="flex gap-3">
            <label className="cursor-pointer text-gray-600 py-1.5 px-3 flex items-center rounded text-sm w-fit">
              <input className="accent-pink-500 mr-0.5" type="checkbox" />
              Auto-refresh
            </label>
            <Link
              href="/"
              className="bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              <FiMaximize2 />
            </Link>
            <Link
              href="/"
              className=" bg-pink-600 text-gray-200 hover:bg-pink-500 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Customize
            </Link>
          </div>
        </div>
        <div className="mb-4 flex gap-3 border-t border-b border-gray-300 py-4">
          <Link
            href="/"
            className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
          >
            Today
          </Link>
          <Link
            href="/"
            className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
          >
            Compare to: Yesterday
          </Link>
        </div>
        <div className="flex flex-wrap w-full my-2 pb-2">
          <div className="lg:w-1/4 md:w-1/2 w-full my-3">
            <div className="p-3 text-gray-600 bg-gray-50 border border-pink-400 mx-2 rounded-xl h-full">
              <h4 className="text-[13px]">Gross sales</h4>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-base font-bold">$0-- </h3>
                <p className="text-[11px] text-pink-400">dummy</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full my-3">
            <div className="p-3 text-gray-600 bg-gray-50 border border-pink-400 mx-2 rounded-xl h-full">
              <h4 className="text-[13px]">Returning customer rate</h4>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-base font-bold">$0-- </h3>
                <p className="text-[11px] text-pink-400">dummy</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full my-3">
            <div className="p-3 text-gray-600 bg-gray-50 border border-pink-400 mx-2 rounded-xl h-full">
              <h4 className="text-[13px]">Orders fulfilled</h4>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-base font-bold">$0-- </h3>
                <p className="text-[11px] text-pink-400">dummy</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full my-3">
            <div className="p-3 text-gray-600 bg-gray-50 border border-pink-400 mx-2 rounded-xl h-full">
              <h4 className="text-[13px]">Orders</h4>
              <div className="flex justify-between items-center mt-2">
                <h3 className="text-base font-bold">$0-- </h3>
                <p className="text-[11px] text-pink-400">dummy</p>
              </div>
            </div>
          </div>
        </div>
        <SaledData />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Total sales by sales channel
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <AverageOrderValueCard
            value={0}
            date="21 Apr 2025"
            dataPoints={[0, 0, 0, 0, 0, 0, 0]} // Adjust with real data
          />
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Total sales by product
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <SessionsOverTime
            value={0}
            date="21 Apr 2025"
            dataPoints={[0, 0, 0, 0, 0, 0, 0]}
          />
          <ConversionRate
            value={0}
            date="21 Apr 2025"
            dataPoints={[0, 0, 0, 0, 0, 0, 0]}
          />

          <ConversionRateBreakdownCard
            totalRate={0}
            items={[
              { label: "Sessions", percentage: 0, value: 0, delta: 0 },
              { label: "Added to ...", percentage: 0, value: 0, delta: 0 },
              { label: "Reached ...", percentage: 0, value: 0, delta: 0 },
              {
                label: "Completed ...",
                percentage: 0,
                value: 0,
                delta: 0,
              },
            ]}
          />

          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Sessions by device type
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Sessions by location
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Total sales by social referrer
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Sessions by social referrer
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Top referrers by sessions
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Sessions by landing page
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Customer cohort analysis
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Sales attributed to marketing
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Sessions by referrer
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Total sales by referrer
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Products by sell-throught rate
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              POS staff sales total
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200 h-80 flex flex-col">
            <h3 className="text-sm font-medium text-gray-700 mb-4">
              Total sales by POS location
            </h3>
            <p className="text-sm text-gray-400 justify-center items-center flex h-full">
              There was no data found for this date range
            </p>
          </div>
        </div>
      </div>
      this is analytics page
    </div>
  );
};

export default Analytics;
