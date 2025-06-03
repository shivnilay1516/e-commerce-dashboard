import React from "react";
import Highlights from "./Highlights";
import AllTracks from "./AllTracks";
import RecentActivities from "./RecentActivities";
import OrderStatus from "./OrderStatus";
import Trafic from "./Trafic";

function dashboard() {
  return (
    <div className=" m-0 sm:m-1 md:m-2 lg:m-3">
      <div className="flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap mx-2 lg:mx-2 md:mx-0 sm:mx-0 justify-between w-full">
        <AllTracks />
        <Trafic />
      </div>

      <Highlights />
      <div className="flex lg:flex-nowrap md:flex-wrap sm:flex-wrap flex-wrap mx-2 lg:mx-2 md:mx-0 sm:mx-0 justify-between w-full">
        <RecentActivities />
        <OrderStatus />
      </div>
    </div>
  );
}

export default dashboard;
