import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Setting = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field: "current" | "new" | "confirm") => {
    if (field === "current") {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (field === "new") {
      setShowNewPassword(!showNewPassword);
    } else if (field === "confirm") {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  return (
    <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:my-0 md:my-5 sm:my-3 my-3">
      <div className="mb-8">
        <h3 className="font-medium text-base font-semibold"> Setting</h3>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search customers"
            className="border border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none"
          />
        </div>
        <div className="flex flex-col lg:flex-row justify-between mt-4 p-1  gap-y-5 lg: gap-y-0">
          <div className="w-full mr-0 lg:w-1/2 lg:mr-5">
            <h3 className="mb-6">Edit Profile</h3>
            <form className="flex flex-col p-5 border border-gray-300 rounded-xl">
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="dummy"
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                />
              </div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Store Name
                </label>
                <input
                  type="text"
                  placeholder="Maxima Studio"
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                />
              </div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Location
                </label>
                <select
                  name=""
                  id=""
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                >
                  <option value="united-state">United State</option>
                  <option value="india">India</option>
                  <option value="russia">Russia</option>
                  <option value="china">China</option>
                </select>
              </div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Currency
                </label>
                <select
                  name=""
                  id=""
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                >
                  <option value="united-state">US Doller $</option>
                  <option value="india">India </option>
                  <option value="russia">Russia</option>
                  <option value="china">China</option>
                </select>
              </div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="dummy@ens.enterprises"
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                />
              </div>
              <div className="mb-6 flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Phone
                </label>
                <input
                  type="number"
                  placeholder="+917896568459"
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm mb-1 text-gray-500">
                  Address
                </label>
                <input
                  type="text"
                  placeholder="B-16, Sector-63 Noida"
                  className="border border-gray-200 bg-gray-100 p-2 rounded focus:outline-none"
                />
              </div>
            </form>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="mb-6">Change Password</h3>
            <form className="flex flex-col p-5 border border-gray-300 rounded-xl mb-3">
              <div className="mb-4 flex flex-col relative">
                <label
                  htmlFor="current-password"
                  className="text-sm mb-1 text-gray-500"
                >
                  Current Password
                </label>
                <input
                  id="current-password"
                  type={showCurrentPassword ? "text" : "password"}
                  className="border border-gray-200 bg-gray-100 p-2 rounded pr-10 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-2 top-[56%]"
                  onClick={() => togglePasswordVisibility("current")}
                >
                  {showCurrentPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
              <div className="mb-4 flex flex-col relative">
                <label
                  htmlFor="new-password"
                  className="text-sm mb-1 text-gray-500"
                >
                  New Password
                </label>
                <input
                  id="new-password"
                  type={showNewPassword ? "text" : "password"}
                  className="border border-gray-200 bg-gray-100 p-2 rounded pr-10 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-2 top-[56%]"
                  onClick={() => togglePasswordVisibility("new")}
                >
                  {showNewPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
              <div className="flex flex-col relative">
                <label
                  htmlFor="confirm-password"
                  className="text-sm mb-1 text-gray-500"
                >
                  Confirm Password
                </label>
                <input
                  id="confirm-password"
                  type={showConfirmPassword ? "text" : "password"}
                  className="border border-gray-200 bg-gray-100 p-2 rounded pr-10 focus:outline-none"
                />
                <button
                  type="button"
                  className="absolute right-2 top-[56%]"
                  onClick={() => togglePasswordVisibility("confirm")}
                >
                  {showConfirmPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </button>
              </div>
            </form>
            <h3 className="my-6">Notifications</h3>
            <div className="flex flex-col p-5 border border-gray-300 rounded-xl">
              <div className="p-3 border border-gray-300 rounded flex justify-between">
                <div>
                  <h4 className="text-sm text-gray-500">Order Confirmation</h4>
                  <p className="text-xs text-gray-400">
                    You will be notified when customer order any product
                  </p>
                </div>
                <div
                  onClick={() => setToggle1(!toggle1)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    toggle1 ? "bg-pink-700" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                      toggle1 ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
              <div className="p-3 border border-gray-300 rounded flex justify-between">
                <div>
                  <h4 className="text-sm text-gray-500">Order Confirmation</h4>
                  <p className="text-xs text-gray-400">
                    You will be notified when customer order any product
                  </p>
                </div>
                <div
                  onClick={() => setToggle2(!toggle2)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    toggle2 ? "bg-pink-700" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                      toggle2 ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
              <div className="p-3 border border-gray-300 rounded flex justify-between">
                <div>
                  <h4 className="text-sm text-gray-500">Order Confirmation</h4>
                  <p className="text-xs text-gray-400">
                    You will be notified when customer order any product
                  </p>
                </div>
                <div
                  onClick={() => setToggle3(!toggle3)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    toggle3 ? "bg-pink-700" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                      toggle3 ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
              <div className="p-3 border border-gray-300 rounded flex justify-between">
                <div>
                  <h4 className="text-sm text-gray-500">Order Confirmation</h4>
                  <p className="text-xs text-gray-400">
                    You will be notified when customer order any product
                  </p>
                </div>
                <div
                  onClick={() => setToggle4(!toggle4)}
                  className={`w-11 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    toggle4 ? "bg-pink-700" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
                      toggle4 ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-end md:justify-center sm:justify-center mr-8 mt-6">
          <button className="bg-pink-700 text-gray-200 hover:bg-pink-600 cursor-pointer lg:py-1.5 md:py-2.5 sm:py-2.5 lg:px-4 md:px-6 sm:px-6 rounded">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
