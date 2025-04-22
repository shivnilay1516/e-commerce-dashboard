"use client";

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Widgets from "./components/Widgets";
import Customer from "./components/Customer";
import Products from "./components/Products";
import Order from "./components/Order";
import Payments from "./components/Payments";
import Setting from "./components/Setting";
import Discount from "./components/Discount";
import Analytics from "./components/Analytics";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeComponent, setActiveComponent] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const COMPONENTS_MAP: { [key: string]: JSX.Element } = {
    dashboard: <Dashboard />,
    customer: <Customer />,
    products: <Products />,
    order: <Order />,
    payments: <Payments />,
    widgets: <Widgets />,
    setting: <Setting />,
    discount: <Discount />,
    analytics: <Analytics />,
  };

  return (
    <div className="flex h-screen m-3 rounded-xl overflow-hidden">
      {isSidebarOpen && <Sidebar onSelect={setActiveComponent} />}
      <div className="flex-1 bg-gray-200 overflow-y-auto">
        <div className="sticky top-0 z-10 bg-gray-200 shadow">
          <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        </div>
        <div className="flex-1 overflow-y-auto p-1 sm:p-2 md:p-2 lg:p-4">
          {COMPONENTS_MAP[activeComponent] || <Dashboard />}
        </div>
      </div>
    </div>
  );
}
