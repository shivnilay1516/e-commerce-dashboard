import React, { useState } from "react";
import Link from "next/link";
import { LuFilter } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

const customers = [
  { name: "kshiteej dubey", email: "Not subscribed", subscribed: false },
  { name: "Shivinilay Srivastav", email: "Subscribed", subscribed: true },
  { name: "John Wick", email: "Not subscribed", subscribed: false },
  { name: "diwakar verma", email: "Not subscribed", subscribed: false },
  { name: "Ankit Singh", email: "Not subscribed", subscribed: false },
  { name: "Anirudh Singh", email: "Subscribed", subscribed: true },
  { name: "Manmohan Pandey", email: "Not subscribed", subscribed: false },
  { name: "Roshani", email: "Subscribed", subscribed: true },
  { name: "Devesh Rana", email: "Not subscribed", subscribed: false },
  { name: "Anni Singh", email: "Subscribed", subscribed: true },
  {
    name: "Manyendra pratan singh",
    email: "Not subscribed",
    subscribed: false,
  },
];

const Customer = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="overflow-scroll md:overscroll-none w-full md:w-auto m-0 sm:m-1 md:m-2 lg:m-3">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:my-0 md:my-3 sm:my-2 my-2 min-w-[720px]">
        <div className="mb-8 flex justify-between">
          <h3 className="font-medium">Customer Page</h3>
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
              className="text-gray-200 bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Add Customer
            </Link>
          </div>
        </div>
        <div className="border-t border-b py-3 relative mx-2 mb-4 justify-between flex border-gray-300">
          <div className="flex items-center">
            <h3 className="">113 customers</h3>
            <span className="px-4">|</span>
            <h4>100% of your customer base</h4>
          </div>

          <button className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm">
            Add filter <FaAngleDown className="ml-2" />
          </button>
        </div>
        <div className="p-4 overflow-x-auto">
          <div className="mb-4 flex justify-between relative">
            <input
              type="text"
              placeholder="Search customers"
              className="border flex w-1/2 border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none"
            />
            <button
              onClick={() => {
                setisOpen((prev) => !prev);
              }}
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              <LuFilter />
            </button>
            {isOpen && (
              <div className="absolute right-0 top-[2.75rem] right-[0rem] py-3 pr-8 pl-2 bg-gray-100 border border-gray-300 rounded">
                <h3 className="font-semibold text-xs">Sort By</h3>
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
          <table className="min-w-full">
            <thead className="bg-gray-300 text-gray-600 text-sm">
              <tr>
                <th className="text-left p-3">
                  <input type="checkbox" />
                </th>
                <th className="text-left p-3">Customer name</th>
                <th className="text-left p-3">Email subscription</th>
                <th className="text-left p-3">Location</th>
                <th className="text-left p-3">Orders</th>
                <th className="text-center p-3">Amount spent</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-100 text-sm hover:bg-gray-50"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 capitalize">{customer.name}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        customer.subscribed
                          ? "bg-green-100 text-green-600"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {customer.email}
                    </span>
                  </td>
                  <td className="p-3">United States</td>
                  <td className="p-3 text-gray-600">0 orders</td>
                  <td className="p-3 text-gray-600 text-center">$0.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Customer;
