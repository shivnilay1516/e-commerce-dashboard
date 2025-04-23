import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

const orders = [
  {
    Order: "#ORD-1001",
    Customer: "Alice Johnson",
    Status: "Shipped",
    Total: "$120.00",
    Date: "2025-04-20",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1002",
    Customer: "Bob Smith",
    Status: "Processing",
    Total: "$80.50",
    Date: "2025-04-19",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1003",
    Customer: "Charlie Evans",
    Status: "Delivered",
    Total: "$230.00",
    Date: "2025-04-18",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1004",
    Customer: "Dana Clark",
    Status: "Cancelled",
    Total: "$59.99",
    Date: "2025-04-17",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1005",
    Customer: "Evan Carter",
    Status: "Pending",
    Total: "$150.00",
    Date: "2025-04-16",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1006",
    Customer: "Fiona Lopez",
    Status: "Delivered",
    Total: "$99.99",
    Date: "2025-04-15",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1007",
    Customer: "George Martin",
    Status: "Processing",
    Total: "$175.25",
    Date: "2025-04-14",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1008",
    Customer: "Hannah Kim",
    Status: "Shipped",
    Total: "$210.00",
    Date: "2025-04-13",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1009",
    Customer: "Isaac Lee",
    Status: "Cancelled",
    Total: "$48.75",
    Date: "2025-04-12",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1010",
    Customer: "Julia Nguyen",
    Status: "Pending",
    Total: "$134.80",
    Date: "2025-04-11",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1011",
    Customer: "Kevin Brooks",
    Status: "Delivered",
    Total: "$299.99",
    Date: "2025-04-10",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1012",
    Customer: "Lily Adams",
    Status: "Processing",
    Total: "$185.00",
    Date: "2025-04-09",
    detailsPdf: "View Details",
  },
  {
    Order: "#ORD-1013",
    Customer: "Marcus Scott",
    Status: "Shipped",
    Total: "$62.50",
    Date: "2025-04-08",
    detailsPdf: "View Details",
  },
];

const Order = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="overflow-scroll md:overscroll-none w-full md:w-auto m-0 sm:m-1 md:m-2 lg:m-3">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:m-0 md:m-3 sm:m-2 m-2 min-w-[720px]">
        <div className="mb-8 flex justify-between">
          <h3 className="font-medium">Order</h3>
          <div className="flex gap-3">
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Export
            </Link>
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Import
            </Link>
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              More Actions
              <FaAngleDown className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="my-5 justify-between flex border-gray-300">
          <div className="flex items-center gap-4">
            <h4>All</h4>
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Add filter
            </Link>
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Draft
            </Link>
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Archived
            </Link>
            <h4>+</h4>
          </div>
          <div className="flex gap-4 relative">
            <input
              type="text"
              placeholder="search"
              className="border border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none"
            />
            <button
              onClick={() => {
                setisOpen((prev) => !prev);
              }}
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Filter <FaAngleDown className="ml-2" />
            </button>
            {isOpen && (
              <div className="absolute right-0 top-[2.75rem] right-[0rem] p-[16px] w-full bg-gray-100 border border-gray-300 rounded">
                <h3 className="font-semibold text-sm">Sort By</h3>
                <div className="pl-1 flex flex-col text-gray-500 mt-1">
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Product Title
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Created
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Updated
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Inventory
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Product type
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Publishing error
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Vendor
                  </label>
                </div>
                <div className="font-semibold text-sm pt-2 mt-2 border-t border-gray-300">
                  <h4 className="flex items-center cursor-pointer mb-1 ">
                    <IoMdArrowUp className="mr-1" />
                    Oldest first
                  </h4>
                  <h5 className="flex items-center cursor-pointer">
                    <IoMdArrowDown className="mr-1" />
                    Newest first
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-300 text-gray-600">
              <tr>
                <th className="text-left p-3">
                  <input type="checkbox" />
                </th>
                <th className="text-left p-3">Order</th>
                <th className="text-left p-3">Customer</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Total</th>
                <th className="text-left p-3">Date</th>
                <th className="text-left p-3">View Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((prod, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3">{prod.Order}</td>
                  <td className="p-3">{prod.Customer}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        prod.Status === "Shipped"
                          ? "bg-blue-100 text-purple-600"
                          : prod.Status === "Processing"
                          ? "bg-yellow-100 text-yellow-600"
                          : prod.Status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : prod.Status === "Cancelled"
                          ? "bg-red-100 text-pink-600"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {prod.Status}
                    </span>
                  </td>
                  <td className="p-3">{prod.Total}</td>
                  <td className="p-3">{prod.Date}</td>
                  <td className="p-1 border border-gray-400 rounded inline-block mt-2 hover:bg-pink-700 hover:text-white cursor-pointer text-xs ml-4">
                    {prod.detailsPdf}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
