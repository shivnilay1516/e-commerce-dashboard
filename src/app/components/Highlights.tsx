import React from "react";
import Image from "next/image";

const data = [
  {
    title: "Revenue Status",
    amount: "$ 432",
    date: "Jan 01 - Jan 10",
    icon: "/images/icons/statistic-bar-01.png",
    gradient: "from-[#ff3c7e] to-[#9d4edd]",
  },
  {
    title: "Page View",
    amount: "$ 322",
    date: "Jan 01 - March 10",
    icon: "/images/icons/web-traffic.png",
    gradient: "from-[#7f53ac] to-[#647dee]",
  },
  {
    title: "Bounce Rate",
    amount: "$ 432",
    date: "Jan 01 - Jan 10",
    icon: "/images/icons/bounce-rate.png",
    gradient: "from-[#36d1dc] to-[#5b86e5]",
  },
  {
    title: "Revenue Status",
    amount: "$ 432",
    date: "Jan 01 - Jan 10",
    icon: "/images/icons/statistic-bar-01.png",
    gradient: "from-[#ffb347] to-[#ff0844]",
  },
];

const Highlights = () => {
  return (
    <div className="flex flex-wrap w-full my-2 pb-2">
      {data.map((item, index) => (
        <div key={index} className="lg:w-1/4 md:w-1/2 w-full my-3">
          <div
            className={`p-6 text-white mx-2 bg-gradient-to-r ${item.gradient} rounded-xl h-full transition-transform hover:scale-105 duration-300`}
          >
            <h4 className="text-[13px]">{item.title}</h4>
            <div className="flex justify-between items-center mt-9">
              <Image src={item.icon} width={50} height={50} alt="stat-icon" />
              <div>
                <h3 className="text-2xl font-bold">{item.amount}</h3>
                <p className="text-[11px]">{item.date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
