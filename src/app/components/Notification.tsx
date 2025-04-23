import React from "react";
import { MdDeleteOutline } from "react-icons/md";

const Notification = () => {
  return (
    <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:m-0 md:m-3 sm:m-2 m-2 min-w-[430px]">
      <h3 className="font-medium mb-8">All Notification</h3>
      <div className="mb-6 flex justify-between border-t border-b border-gray-300 items-center py-3">
        <p className="text-sm">100 Notification</p>
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none"
        />
      </div>
      <div className="flex justify-between items-center border-b border-gray-300 text-sm w-full text-gray-500">
        <button className="relative px-4 py-2 text-black">
          All
          <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold bg-pink-500 text-white rounded-full">
            20
          </span>
        </button>
        <button className="relative px-4 py-2">
          Archive
          <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold bg-gray-200 text-gray-500 rounded-full">
            10
          </span>
        </button>
        <button className="relative px-4 py-2">
          Favorite
          <span className="ml-1 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold bg-gray-200 text-gray-500 rounded-full">
            17
          </span>
        </button>
      </div>
      <ul className="divide-y divide-gray-200 text-sm mt-2">
        {[
          {
            id: 1,
            starred: false,
            unread: true,
            content:
              "We're pleased to inform you that a new customer has registered! Please follow up promptly by contacting.",
            time: "Just Now",
          },
          {
            id: 2,
            starred: true,
            unread: false,
            content:
              "Hello Sales Marketing Team, We have a special offer for our customers! Enjoy a 20% discount on selected..",
            time: "30 menit ago",
          },
          {
            id: 3,
            starred: false,
            unread: true,
            content:
              "Hello Sales Marketing Team, This is a reminder to achieve this month's sales target. Currently, we've....",
            time: "2 days ago",
          },
          {
            id: 4,
            starred: true,
            unread: false,
            content:
              "Hello Sales Marketing Team, We've received a product information request from a potential customer.",
            time: "5 days ago",
          },
          {
            id: 5,
            starred: false,
            unread: true,
            content:
              "Hello Sales Marketing Team, We've received a product information request from a potential customer.",
            time: "07 Feb, 2024",
          },
        ].map((msg) => (
          <li
            key={msg.id}
            className={`flex justify-between items-start px-4 py-3 ${
              msg.unread ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <div className="flex items-center space-x-3">
              <button>
                <span
                  className={`${
                    msg.starred ? "text-gray-600" : "text-gray-400"
                  } text-lg`}
                >
                  ★
                </span>
              </button>
              <p className="text-sm leading-snug max-w-md">{msg.content}</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span>{msg.time}</span>
              <MdDeleteOutline className="text-pink-400 text-lg hover:text-pink-600 cursor-pointer text-lg" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
