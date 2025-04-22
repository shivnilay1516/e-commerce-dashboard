import React from "react";
import Link from "next/link";
import { BsListTask } from "react-icons/bs";

const RecentActivities = () => {
  return (
    <div className="flex-shrink-0 w-full sm:basis-[100%] sm:w-[100%] md:basis-[100%] md:w-[100%] lg:basis-[40%] lg:w-[40%]">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:my-0 md:my-3 sm:my-2 my-2">
        <h2 className="text-base">Recent Activityes</h2>
        <ul className="mt-3 text-sm">
          <li className="flex items-center justify-center my-8 z-9">
            <p className="text-gray-400 mb-1">42 Mins Ago</p>
            <Link href="/" className="recent-icon mx-6 z-1 relative">
              <BsListTask className=" text-white text-[40px] p-[7px] bg-pink-600 rounded-3xl" />
            </Link>
            <div>
              <h4 className="text-base font-semibold mb-2">Task Updated</h4>
              <p className="text-xs">
                Nikolai <span className="text-gray-300">Updated a Task</span>
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center my-8 z-9">
            <p className="text-gray-400 mb-1">42 Mins Ago</p>
            <Link href="/" className="recent-icon mx-6 z-1 relative">
              <BsListTask className=" text-white text-[40px] p-[7px] bg-pink-600 rounded-3xl" />
            </Link>
            <div>
              <h4 className="text-base font-semibold mb-2">Task Updated</h4>
              <p className="text-xs">
                Nikolai <span className="text-gray-300">Updated a Task</span>
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center my-8 z-9">
            <p className="text-gray-400 mb-1">42 Mins Ago</p>
            <Link href="/" className="recent-icon mx-6 z-1 relative">
              <BsListTask className=" text-white text-[40px] p-[7px] bg-pink-600 rounded-3xl" />
            </Link>
            <div>
              <h4 className="text-base font-semibold mb-2">Task Updated</h4>
              <p className="text-xs">
                Nikolai <span className="text-gray-300">Updated a Task</span>
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center my-8 z-9">
            <p className="text-gray-400 mb-1">42 Mins Ago</p>
            <Link href="/" className="recent-icon mx-6 z-1 relative">
              <BsListTask className=" text-white text-[40px] p-[7px] bg-pink-600 rounded-3xl" />
            </Link>
            <div>
              <h4 className="text-base font-semibold mb-2">Task Updated</h4>
              <p className="text-xs">
                Nikolai <span className="text-gray-300">Updated a Task</span>
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center my-8 z-9">
            <p className="text-gray-400 mb-1">42 Mins Ago</p>
            <Link href="/" className="recent-icon mx-6 z-1 relative">
              <BsListTask className=" text-white text-[40px] p-[7px] bg-pink-600 rounded-3xl" />
            </Link>
            <div>
              <h4 className="text-base font-semibold mb-2">Task Updated</h4>
              <p className="text-xs">
                Nikolai <span className="text-gray-300">Updated a Task</span>
              </p>
            </div>
          </li>
          <li className="flex items-center justify-center my-8 z-9">
            <p className="text-gray-400 mb-1">42 Mins Ago</p>
            <Link href="/" className="recent-icons mx-6 z-1 relative">
              <BsListTask className=" text-white text-[40px] p-[7px] bg-pink-600 rounded-3xl" />
            </Link>
            <div>
              <h4 className="text-base font-semibold mb-2">Task Updated</h4>
              <p className="text-xs">
                Nikolai <span className="text-gray-300">Updated a Task</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RecentActivities;
