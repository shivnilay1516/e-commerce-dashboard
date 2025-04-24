import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Smile, AtSign, Hash, Link as LinkIcon } from "lucide-react";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoDuplicateOutline } from "react-icons/io5";

const CreateDiscount = () => {
  const [code, setCode] = useState("");
  const [comment, setComment] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const generateCode = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    setCode(result);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handlePost = () => {
    if (comment.trim()) {
      console.log("Posted comment:", comment);
      setComment("");
    }
  };

  const addEmoji = (emojiData: EmojiClickData) => {
    setComment((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="bg-gray-50 text-gray-600 p-4 rounded-xl lg:m-0 md:m-5 sm:m-3 m-3">
      <div className="mb-8 flex justify-between">
        <h3 className="font-medium">Create Discount</h3>
        <div className="flex gap-3">
          <Link
            href="/"
            className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
          >
            <IoDuplicateOutline className="mr-1" /> Duplicate
          </Link>
          <Link
            href="/"
            className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 flex items-center rounded text-sm"
          >
            Activate
          </Link>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mt-4 p-1 gap-y-5 lg: gap-y-0 items-start">
        <div className="w-full mr-0 lg:w-[60%] lg:mr-5">
          <div className="border border-gray-300 rounded p-4 mb-6">
            <div className="flex justify-between text-base mb-3 items-center">
              <h4 className="text-gray-700">Amount off products</h4>
              <p className="text-gray-500 text-sm">Product discount</p>
            </div>
            <div className="flex justify-between text-[14px] text-gray-500 mb-0.5">
              <h4 className="text-[14px]">Discount Code</h4>
              <p
                className="text-pink-400 cursor-pointer"
                onClick={generateCode}
              >
                Generate random code
              </p>
            </div>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mb-1"
            />
            <p className="text-gray-400 text-[13px] mb-4">
              Customer must enter this code at checkout
            </p>
          </div>
          <div className="border border-gray-300 rounded p-4 mb-6 gap-y-2 flex flex-col">
            <h4 className="text-gray-700">Discount Value</h4>
            <div className="flex justify-between relative">
              <select
                name=""
                id=""
                className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mr-3 text-gray-500"
              >
                <option value="Percent">Percent</option>
                <option value="Percent">Percent</option>
                <option value="Percent">Percent</option>
              </select>
              <input
                type=""
                placeholder="30"
                className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none"
              />
              <span className="absolute right-2.5 top-1.5 text-gray-400 z-20">
                %
              </span>
            </div>
            <h4 className="text-gray-500">Applies to</h4>
            <select
              name=""
              id=""
              className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mr-3 text-gray-500 mb-2"
            >
              <option value="SpecificCollections">Specific collections</option>
              <option value="SpecificCollections">Specific collections</option>
              <option value="SpecificCollections">Specific collections</option>
            </select>
            <div className="flex justify-between mb-2">
              <input
                type="text"
                placeholder="search collections"
                className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mr-3"
              />
              <button className="border border-gray-200 cursor-pointer bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-1.5 px-3 rounded">
                Browse
              </button>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-500 border border-gray-200 rounded p-3">
              <div className="flex gap-4 items-center">
                <Image
                  src="/images/phone-img-01.jpg"
                  width={50}
                  height={50}
                  alt="product-img"
                />
                <div className="">
                  <h4 className="">Accessories</h4>
                  <p className="text-gray-300">91 products</p>
                </div>
              </div>
              <span className="mr-3">X</span>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-4 mb-6">
            <h4 className="text-gray-700">Discount Value</h4>
            <div className="mt-2 text-gray-500">
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                No minimum requirements
              </label>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Minimum purchase amount ($)
              </label>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Minimum quantity of items
              </label>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-4 mb-6">
            <h4 className="text-gray-700">Eligibility</h4>
            <p className="text-gray-400 text-sm ml-1 my-1.5">
              Redeemable on all sales channels you have set up
            </p>
            <div className="mt-2 text-gray-500">
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                All customers
              </label>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Specific customer segments
              </label>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Specific customers
              </label>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-4 mb-6">
            <h4 className="text-gray-700">Maximum discount uses</h4>
            <div className="mt-2 text-gray-500">
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Limit number of times this discount can be used in total
              </label>
              <input
                type="number"
                className="border border-gray-200 bg-gray-100 p-1 my-1 rounded focus:outline-none mr-3"
              />
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Limit to one use per customer
              </label>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-4 mb-6">
            <h4 className="text-gray-700">Combinations</h4>
            <p className="text-gray-400 text-sm ml-1 my-1.5">
              {code} can be combined with:
            </p>
            <div className="mt-2 text-gray-500">
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Product discounts
              </label>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Order discounts
              </label>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="accent-pink-500" />
                Shipping discounts
              </label>
            </div>
          </div>
          <div className="border border-gray-300 rounded p-4 mb-6">
            <h4 className="text-gray-700 text-base">Active dates</h4>
            <div className="mt-2 text-gray-500 gap-2">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-full">
                  <h4 className="text-gray-600 mb-1">Start date</h4>
                  <input
                    type="date"
                    placeholder="2022-01-19"
                    className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mb-1"
                  />
                </div>
                <div className="w-full">
                  <h4 className="text-gray-600 mb-1">Start time(IST)</h4>
                  <input
                    type="time"
                    placeholder="11:03 am"
                    className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mb-1"
                  />
                </div>
              </div>
              <label className="py-1 text-sm flex items-center gap-2 cursor-pointer my-2">
                <input type="checkbox" className="accent-pink-500" />
                Shipping discounts
              </label>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-full">
                  <h4 className="text-gray-600 mb-1">End date</h4>
                  <input
                    type="date"
                    placeholder="2022-01-19"
                    className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mb-1"
                  />
                </div>
                <div className="w-full">
                  <h4 className="text-gray-600 mb-1">End time(IST)</h4>
                  <input
                    type="time"
                    placeholder="11:03 am"
                    className="border flex w-full border-gray-200 bg-gray-100 p-1.5 rounded focus:outline-none mb-1"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="border border-gray-300 rounded p-4">
            <h4 className="text-gray-700 mb-2">Timeline</h4>
            <div className="mt-2 text-gray-500 flex items-start border-b border-gray-300 pb-1">
              <p className="py-1 px-1.5 text-sm bg-pink-600 rounded mr-2 text-gray-50">
                SS
              </p>
              <textarea
                placeholder="Write a comment..."
                className="w-full resize-none rounded-md text-sm focus:outline-none"
                value={comment}
                onChange={handleInput}
                rows={2}
              />
            </div>
            <div className="relative">
              {showEmojiPicker && (
                <div className="absolute bottom-16 left-2 z-50">
                  <Picker data={data} onEmojiSelect={addEmoji} />
                </div>
              )}

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <Smile
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => setShowEmojiPicker((prev) => !prev)}
                  />
                  <AtSign className="w-4 h-4 cursor-pointer" />
                  <Hash className="w-4 h-4 cursor-pointer" />
                  <LinkIcon className="w-4 h-4 cursor-pointer" />
                </div>

                <button
                  className={`ml-auto px-3 py-1.5 text-sm rounded-md ${
                    comment.trim()
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handlePost}
                  disabled={!comment.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div> */}
          <div className="border border-gray-300 rounded p-4">
            <h4 className="text-gray-700 mb-2">Timeline</h4>
            <div className="mt-2 text-gray-500 flex items-start border-b border-gray-300 pb-1">
              <p className="py-1 px-1.5 text-sm bg-pink-600 rounded mr-2 text-gray-50">
                SS
              </p>
              <textarea
                placeholder="Write a comment..."
                className="w-full resize-none rounded-md text-sm focus:outline-none"
                value={comment}
                onChange={handleInput}
                rows={2}
              />
            </div>
            <div className="relative">
              {showEmojiPicker && (
                <div className="absolute bottom-16 left-2 z-50">
                  <EmojiPicker onEmojiClick={addEmoji} height={350} />
                </div>
              )}
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2 text-gray-500">
                  <Smile
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => setShowEmojiPicker((prev) => !prev)}
                  />
                  <AtSign className="w-4 h-4 cursor-pointer" />
                  <Hash className="w-4 h-4 cursor-pointer" />
                  <LinkIcon className="w-4 h-4 cursor-pointer" />
                </div>
                <button
                  className={`ml-auto px-3 py-1.5 text-sm rounded-md ${
                    comment.trim()
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handlePost}
                  disabled={!comment.trim()}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
          <p className="text-sm text-gray-400 mt-2 text-right">
            Only you and other staff can see comments
          </p>
        </div>
        <div className="w-full lg:w-[40%]  border border-gray-300 rounded p-5"></div>
      </div>

      <div className="flex items-center gap-4 justify-end mt-10">
        <Link
          href="/"
          className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-2 px-3 flex items-center rounded text-sm"
        >
          <RiDeleteBin7Line className="mr-1" /> Delete discount
        </Link>
        <Link
          href="/"
          className=" bg-gray-200 text-gray-600 hover:text-gray-200 hover:bg-pink-600 py-2 px-3 flex items-center rounded text-sm"
        >
          Save
        </Link>
      </div>
    </div>
  );
};

export default CreateDiscount;
