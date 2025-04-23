import React, { useState } from "react";
import Link from "next/link";
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";
import { LuFilter } from "react-icons/lu";
import { BiExport } from "react-icons/bi";
import DiscountModal from "./DiscountModal";

const discountdata = [
  {
    title: "74CVV6F4M2AG",
    description: "30% off Accessories • One use per customer",
    status: "Expired",
    method: "Code",
    type: "Amount off products",
    subtype: "Product discount",
    combinations: "Not set to combine",
    used: 0,
  },
  {
    title: "30% Off",
    description: "30% off entire order • Minimum purchase of ₹100.00",
    status: "Expired",
    method: "Automatic",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 0,
  },
  {
    title: "20% Off",
    description: "20% off entire order • Minimum purchase of ₹500.00",
    status: "Expired",
    method: "Automatic",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 13,
  },
  {
    title: "10% OFF On Accessories",
    description: "50% off entire order • Minimum purchase of ₹100.00",
    status: "Expired",
    method: "Automatic",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 1,
  },
  {
    title: "15% Off Sitewide",
    description: "15% off entire order • No minimum purchase required",
    status: "Expired",
    method: "Automatic",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 7,
  },
  {
    title: "Free Shipping",
    description: "Free shipping on orders over ₹200.00",
    status: "Expired",
    method: "Automatic",
    type: "Shipping discount",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 4,
  },
  {
    title: "BOGO Offer",
    description: "Buy one get one free • Accessories only",
    status: "Expired",
    method: "Code",
    type: "Buy X Get Y",
    subtype: "Product discount",
    combinations: "Not set to combine",
    used: 3,
  },
  {
    title: "Festive 25% Off",
    description: "25% off entire order • Minimum purchase of ₹300.00",
    status: "Expired",
    method: "Code",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 10,
  },
  {
    title: "Student Discount",
    description: "20% off for students • ID required",
    status: "Expired",
    method: "Code",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 5,
  },
  {
    title: "App Exclusive",
    description: "10% off in-app purchases only",
    status: "Expired",
    method: "Automatic",
    type: "Amount off order",
    subtype: "Order discount",
    combinations: "Not set to combine",
    used: 6,
  },
];

const Discount = () => {
  const [isOpen, setisOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="overflow-scroll md:overscroll-none w-full md:w-auto m-0 sm:m-1 md:m-2 lg:m-3">
      <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:m-0 md:m-3 sm:m-2 m-2 min-w-[720px]">
        <div className="mb-8 flex justify-between">
          <h3 className="font-medium">Discount</h3>
          <div className="flex gap-3">
            <Link
              href="/"
              className="bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              <BiExport className="mr-2 font-bold" /> Export
            </Link>
            <button
              onClick={handleOpenModal}
              className="bg-pink-600 text-white hover:bg-pink-500 py-2 px-4 rounded text-sm"
            >
              Create Discount
            </button>
            {modalOpen && <DiscountModal onClose={handleCloseModal} />}
          </div>
        </div>
        <div className="mb-4 flex justify-between border-t border-b border-gray-300 py-4">
          <input
            type="text"
            placeholder="Search all discounts"
            className="border flex w-1/2 border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none"
          />
          <div className="flex gap-3 relative">
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Cancel
            </Link>
            <Link
              href="/"
              className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              Save as
            </Link>
            <button
              onClick={() => {
                setisOpen((prev) => !prev);
              }}
              className=" bg-gray-200 text-gray-600 items-center hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
            >
              <LuFilter />
            </button>
            {isOpen && (
              <div className="absolute right-0 top-[2.75rem] right-[0rem] p-[16px] w-full bg-gray-100 border border-gray-300 rounded">
                <h3 className="font-semibold text-sm">Sort By</h3>
                <div className="pl-1 flex flex-col text-gray-500 mt-1">
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Created at date
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Start date
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    End date
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Title
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Updated at date
                  </label>
                  <label className="whitespace-nowrap py-1 text-sm flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="accent-pink-500" />
                    Used
                  </label>
                </div>
                <div className="font-semibold text-sm pt-2 mt-2 border-t border-gray-300">
                  <h4 className="flex items-center cursor-pointer mb-1 ">
                    <IoMdArrowUp className="mr-1" />
                    Earliest
                  </h4>
                  <h5 className="flex items-center cursor-pointer">
                    <IoMdArrowDown className="mr-1" />
                    Latest
                  </h5>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="py-1">
          <Link
            href="/"
            className=" bg-pink-600 text-gray-200 hover:bg-pink-400 py-1.5 px-3 rounded text-sm"
          >
            Add filter <span className="ml-1"> +</span>
          </Link>
        </div>
        <table className="min-w-full bg-whit text-sm text-left mt-4">
          <thead className="bg-gray-300 text-gray-600 uppercase text-xs">
            <tr>
              <th className="p-4">
                <input type="checkbox" className="form-checkbox" />
              </th>
              <th className="p-4">Title</th>
              <th className="p-4">Status</th>
              <th className="p-4">Method</th>
              <th className="p-4">Type</th>
              <th className="p-4">Combinations</th>
              <th className="p-4">Used</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {discountdata.map((item, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="p-4">
                  <input type="checkbox" className="form-checkbox" />
                </td>
                <td className="p-4">
                  <div className="font-medium">{item.title}</div>
                  <div className="text-sm text-gray-500">
                    {item.description}
                  </div>
                </td>
                <td className="p-4 text-pink-600">{item.status}</td>
                <td className="p-4">{item.method}</td>
                <td className="p-4">
                  <div>{item.type}</div>
                  <div className="text-xs text-gray-500">{item.subtype}</div>
                </td>
                <td className="p-4 text-gray-500">{item.combinations}</td>
                <td className="p-4">{item.used}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Discount;
