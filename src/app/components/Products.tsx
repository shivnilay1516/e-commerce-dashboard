import React, { useState } from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import Image from "next/image";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
const products = [
  {
    name: "Samsung S26",
    status: "Active",
    inventory: "2 in stock for 1 variant",
    stockLevel: "low",
    channels: 2,
    markets: 2,
    category: "",
    type: "Samsung",
    vendor: 18,
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Joshua 21 Ltrs Black Laptop Backpack",
    status: "Active",
    inventory: "131 in stock for 5 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "Uncategorized",
    type: "Test",
    vendor: 18,
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Zenana Zip Up Turtleneck Puffer Jacket with Pockets",
    status: "Active",
    inventory: "10 in stock for 4 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Perfee Leopard Open Front Long Sleeve Jacket",
    status: "Active",
    inventory: "109 in stock for 9 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Perfee Leopard Open Front Long Sleeve Jacket",
    status: "Active",
    inventory: "109 in stock for 9 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Perfee Leopard Open Front Long Sleeve Jacket",
    status: "Active",
    inventory: "109 in stock for 9 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Perfee Leopard Open Front Long Sleeve Jacket",
    status: "Active",
    inventory: "109 in stock for 9 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Perfee Leopard Open Front Long Sleeve Jacket",
    status: "Active",
    inventory: "109 in stock for 9 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
  {
    name: "Perfee Leopard Open Front Long Sleeve Jacket",
    status: "Active",
    inventory: "109 in stock for 9 variants",
    stockLevel: "normal",
    channels: 2,
    markets: 2,
    category: "",
    type: "",
    vendor: "Trendsi",
    image: "/images/phone-img-01.jpg",
  },
];

const Products = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className="overflow-scroll md:overscroll-none w-full md:w-auto m-0 sm:m-1 md:m-2 lg:m-3">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:m-0 md:m-3 sm:m-2 m-2 min-w-[1000px]">
        <div className="mb-8 flex justify-between">
          <h3 className="font-medium">Products</h3>
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
            <Link
              href="/"
              className="text-gray-200 bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Add Customer
            </Link>
          </div>
        </div>
        <div className="border-t border-b py-3 mx-2 mb-4 justify-between flex border-gray-300">
          <div className="flex">
            <div className="mx-4">
              <h3 className="text-sm">Products by sell-through rate</h3>
              <h5 className="text-gray-400 text-xs">0% --</h5>
            </div>
            <span className="border-l border-gray-300"></span>
            <div className="mx-4">
              <h3 className="text-sm">
                Products by days of inventory remaining
              </h3>
              <h5 className="text-gray-400 text-xs">No data</h5>
            </div>
            <span className="border-l border-gray-300"></span>
            <div className="mx-4">
              <h3 className="text-sm">ABC product analysis</h3>
              <h5 className="text-gray-400 text-xs">No data</h5>
            </div>
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
              <div className="absolute right-0 top-[2.75rem] right-[0rem] p-[16px] w-[60%] bg-gray-100 border border-gray-300 rounded">
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
                <th className="p-3">
                  <input type="checkbox" />
                </th>
                <th className="text-left p-3">Product</th>
                <th className="text-left p-3">Status</th>
                <th className="text-left p-3">Inventory</th>
                <th className="text-left p-3">Sales channels</th>
                <th className="text-left p-3">Markets</th>
                <th className="text-left p-3">Category</th>
                <th className="text-left p-3">Type</th>
                <th className="text-left p-3">Vendor</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>
                  <td className="p-3 flex items-center gap-3">
                    {typeof prod.image === "string" &&
                    prod.image.includes(".jpg") ? (
                      <Image
                        src={prod.image}
                        alt={prod.name}
                        width={50}
                        height={50}
                        className="w-10 h-10 object-cover rounded"
                      />
                    ) : (
                      <span className="text-2xl">{prod.image}</span>
                    )}
                    <span>{prod.name}</span>
                  </td>
                  <td className="p-3">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                      {prod.status}
                    </span>
                  </td>
                  <td className="p-3">
                    <span
                      className={`${
                        prod.stockLevel === "low"
                          ? "text-pink-500"
                          : "text-gray-700"
                      } text-sm font-medium`}
                    >
                      {prod.inventory}
                    </span>
                  </td>
                  <td className="p-3">{prod.channels}</td>
                  <td className="p-3">{prod.markets}</td>
                  <td className="p-3">{prod.category || "-"}</td>
                  <td className="p-3">{prod.type || "-"}</td>
                  <td className="p-3">{prod.vendor || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
