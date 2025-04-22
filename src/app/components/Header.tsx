import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="py-3 bg-gray-100 justify-between flex text-gray-400 text-xl">
      <button onClick={onMenuClick} className="text-2xl cursor-pointer ml-3">
        <IoMdMenu />
      </button>
      <div className="flex justify-end mr-6 items-center ">
        <IoIosNotifications className="mx-2 cursor-pointer" />
        <IoMdMail className="mx-2 cursor-pointer" />
        <Image
          src="/images/profile-icon.png"
          width={28}
          height={28}
          alt="profile-img"
          className="rounded-[50%] border border-gray-600 mx-2 cursor-pointer"
        />
        <IoIosSettings className="mx-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
