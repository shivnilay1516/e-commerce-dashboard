"use client";
import React from "react";
import { SlGraph } from "react-icons/sl";
import {
  FaHome,
  FaChartPie,
  FaRegBell,
  FaUser,
  FaCog,
  FaStore,
  FaBook,
  FaBoxOpen,
  FaShoppingCart,
  FaMoneyBillWave,
} from "react-icons/fa";

type MenuItem = {
  name: string;
  icon: React.ReactElement;
  key: string;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <FaHome />, key: "dashboard" },
  { name: "Customer", icon: <FaUser />, key: "customer" },
  { name: "Products", icon: <FaBoxOpen />, key: "products" },
  { name: "Order", icon: <FaShoppingCart />, key: "order" },
  { name: "Payments", icon: <FaMoneyBillWave />, key: "payments" },
  { name: "Analytics", icon: <FaMoneyBillWave />, key: "analytics" },
  { name: "Discount", icon: <FaMoneyBillWave />, key: "discount" },
  { name: "Widgets", icon: <FaChartPie />, key: "widgets" },
  { name: "Notifications", icon: <FaRegBell />, key: "notifications" },
  { name: "E-Commerce", icon: <FaStore />, key: "storeChart" },
  { name: "Documentation", icon: <FaBook />, key: "documentation" },
  { name: "Setting", icon: <FaCog />, key: "setting" },
];

type SidebarProps = {
  onSelect: (key: string) => void;
  activeComponent: string;
};

function Sidebar({ onSelect, activeComponent }: SidebarProps) {
  return (
    <div className="bg-gray-100 w-[14rem] items-center flex flex-col">
      <h3 className="text-xl py-3 px-3 mb-10 w-full text-white font-semibold flex justify-center items-center bg-gradient-to-r from-[#ff3c7e] to-[#9d4edd]">
        <SlGraph className="bg-amber-500 rounded-3xl text-white p-0.5 mr-1 shadow-lg" />
        E-Commerce
      </h3>
      <div className="flex-1 overflow-y-auto h-full w-full">
        <ul className="text-gray-600">
          {menuItems.map((item) => {
            const isActive = item.key === activeComponent;
            return (
              <li key={item.key} className="my-2">
                <div
                  className={`flex items-center px-4 py-3 w-full transition-all cursor-pointer 
                    ${
                      isActive
                        ? "border-l-4 text-[#ff3c7e] border-[#ff3c7e] bg-gray-200"
                        : "hover:border-l-4 hover:text-[#ff3c7e] hover:border-[#ff3c7e] hover:bg-gray-200"
                    }`}
                  onClick={() => onSelect(item.key)}
                >
                  {React.cloneElement(item.icon)}
                  <span className="ml-3">{item.name}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
