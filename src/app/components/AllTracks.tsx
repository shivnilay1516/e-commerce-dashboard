import React from "react";
import Link from "next/link";
import { BsListTask } from "react-icons/bs";
import StoreChart from "./StoreChart";

const AllTracks = () => {
  return (
    <div className="overflow-scroll md:overscroll-none w-full rounded-2xl">
      <div className="flex-shrink-0 w-full sm:w-[100%] md:w-[100%] lg:w-[100%] min-w-[820px] overflow-x-auto bg-white">
        <div className="text-gray-600 p-5 rounded-xl lg:my-0 md:my-3 sm:my-2 my-2">
          <div className="flex gap-2">
            <div className="">
              <h2 className="text-base">Dashboard</h2>
              <p className="text-gray-400 text-xs mb-8">
                {" "}
                Overview of Latest Month
              </p>

              <div className="mb-8">
                <h4 className="text-3xl text-black font-semibold">$3468.96</h4>
                <p className="text-gray-400 text-xs">Current Month Earnings</p>
              </div>
              <div className="mb-10">
                <h4 className="text-3xl text-black font-semibold">82</h4>
                <p className="text-gray-400 text-xs">Current Month Earnings</p>
              </div>
              <div className="inline-block mb-7">
                <Link
                  href="/"
                  className="text-gray-200 bg-pink-600 whitespace-nowrap py-2 px-4 flex items-center rounded text-sm"
                >
                  Last Month Summary
                </Link>
              </div>
            </div>
            <div className="w-full flex">
              <StoreChart />
            </div>
          </div>
          <div className="flex justify-between mb-2 mt-8">
            <div className="flex items-center">
              <Link href="/" className="mr-3">
                <BsListTask className=" text-white text-[32px] p-[7px] bg-pink-600 rounded-3xl" />
              </Link>
              <div>
                <h4 className="text-xs text-gray-500">Wallet Ballance</h4>
                <p className="text-base text-gray-700 font-semibold">
                  $4,567.53
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/" className="mr-3">
                <BsListTask className=" text-white text-[32px] p-[7px] bg-pink-600 rounded-3xl" />
              </Link>
              <div>
                <h4 className="text-xs text-gray-500">Wallet Ballance</h4>
                <p className="text-base text-gray-700 font-semibold">
                  $4,567.53
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/" className="mr-3">
                <BsListTask className=" text-white text-[32px] p-[7px] bg-pink-600 rounded-3xl" />
              </Link>
              <div>
                <h4 className="text-xs text-gray-500">Wallet Ballance</h4>
                <p className="text-base text-gray-700 font-semibold">
                  $4,567.53
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Link href="/" className="mr-3">
                <BsListTask className=" text-white text-[32px] p-[7px] bg-pink-600 rounded-3xl" />
              </Link>
              <div>
                <h4 className="text-xs text-gray-500">Wallet Ballance</h4>
                <p className="text-base text-gray-700 font-semibold">
                  $4,567.53
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTracks;
