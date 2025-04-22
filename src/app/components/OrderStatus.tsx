import React from "react";
import Link from "next/link";
import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";

const OrderStatus = () => {
  return (
    <div className="overflow-scroll md:overscroll-none w-full md:w-auto">
      <div className="flex-shrink-0 w-full sm:w-[100%] md:w-[100%] lg:w-[60%] min-w-[700px]">
        <div className="bg-gray-50 text-gray-700 p-4 rounded-xl lg:my-0 md:my-3 sm:my-2 my-2">
          <h2 className="text-base">Order Status</h2>
          <p className="text-gray-400 text-xs mb-6">
            {" "}
            Overview of Latest Month
          </p>
          <div className="flex justify-between mb-6">
            <div className="flex gap-3">
              <Link
                href="/"
                className=" bg-gray-200 text-gray-700 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
              >
                <IoIosAddCircle className="mr-1" /> Add
              </Link>
              <Link
                href="/"
                className=" bg-gray-200 text-gray-700 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
              >
                <RiDeleteBinLine />
              </Link>
              <Link
                href="/"
                className=" bg-gray-200 text-gray-700 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
              >
                <IoMdNotificationsOutline />
              </Link>
              <Link
                href="/"
                className=" bg-gray-200 text-gray-700 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
              >
                Add
              </Link>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-200 p-2 rounded text-sm focus:outline-none"
              />
              <Link
                href="/"
                className=" bg-gray-200 text-gray-700 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
              >
                Search
              </Link>
            </div>
          </div>
          <table className="min-w-full text-left text-sm">
            <thead className="bg-gray-700 text-white">
              <tr className="rounded">
                <th className="px-6 py-3">INVOICE</th>
                <th className="px-6 py-3">CUSTOMERS</th>
                <th className="px-6 py-3">FROM</th>
                <th className="px-6 py-3">PRICE</th>
                <th className="px-6 py-3">STATUS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  invoice: "12386",
                  customer: "Charly Dues",
                  from: "Brazil",
                  price: "$299",
                  status: "Process",
                },
                {
                  invoice: "12386",
                  customer: "Marko",
                  from: "Italy",
                  price: "$2642",
                  status: "Open",
                },
                {
                  invoice: "12386",
                  customer: "Deniyel Onak",
                  from: "Russia",
                  price: "$981",
                  status: "On Hold",
                },
                {
                  invoice: "12386",
                  customer: "Belgiri Bastana",
                  from: "Korea",
                  price: "$369",
                  status: "Process",
                },
                {
                  invoice: "12386",
                  customer: "Sarti Onuska",
                  from: "Japan",
                  price: "$1240",
                  status: "Open",
                },
                {
                  invoice: "13486",
                  customer: "Janti Sonuska",
                  from: "Koriya",
                  price: "$1440",
                  status: "Close",
                },
              ].map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{item.invoice}</td>
                  <td className="px-6 py-4">{item.customer}</td>
                  <td className="px-6 py-4">{item.from}</td>
                  <td className="px-6 py-4">{item.price}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded text-white text-xs font-semibold
                ${item.status === "Process" && "bg-pink-500"}
                ${item.status === "Open" && "bg-green-500"}
                ${item.status === "On Hold" && "bg-sky-400"}
                ${item.status === "Close" && "bg-red-400"}
              `}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="p-2.5 flex justify-between items-center text-[13px] text-gray-500">
            <span>Showing 1 to 20 of 20 entries</span>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <button
                  key={num}
                  className={`w-8 h-8 flex items-center justify-center rounded-full
            ${
              num === 1
                ? "bg-pink-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }
          `}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatus;
