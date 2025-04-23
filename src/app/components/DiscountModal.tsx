import { AiOutlineClose } from "react-icons/ai";
import React from "react";
import { IoPricetagOutline } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

interface DiscountModalProps {
  onClose: () => void;
}

const DiscountModal: React.FC<DiscountModalProps> = ({ onClose }) => {
  const discountOptions = [
    {
      title: "Amount off products",
      description: "Discount specific products or collections of products",
      type: "Product discount",
      link: "/",
    },
    {
      title: "Buy X get Y",
      description: "Discount specific products or collections of products",
      type: "Product discount",
      link: "/",
    },
    {
      title: "Amount off order",
      description: "Discount the total order amount",
      type: "Order discount",
      link: "/",
    },
    {
      title: "Free shipping",
      description: "Offer free shipping on an order",
      type: "Shipping discount",
      link: "/",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/20">
      <div className="bg-white rounded-lg w-[90%] max-w-md shadow-lg relative lg:p-6 md:p-2 sm:p-3 p-3 lg:min-w-[600px] md:w-full sm:w-full w-full">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          <AiOutlineClose size={20} />
        </button>
        <h2 className="text-lg font-semibold mb-4">Select discount type</h2>
        <div className="space-y-4">
          {discountOptions.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-md lg:p-4 md:p-2 sm:p-2 p-2 hover:bg-gray-50 cursor-pointer"
            >
              <Link
                href={item.link}
                className="flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="flex gap-2 items-center lg:text-sm md:text-xs sm:text-xs text-xs ml-1">
                  <span className="px-2.5 py-1.5 flex items-center bg-gray-200 rounded">
                    <IoPricetagOutline className="mr-1" /> {item.type}
                  </span>
                  <FaAngleRight className="bounce-x" />
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="text-sm px-4 py-2 bg-gray-100 rounded hover:bg-gray-200"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiscountModal;
