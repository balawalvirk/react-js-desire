import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../../../buttons/Button";
import StandardModal from "../../StandardModal";

const iloveData = [
  {
    title: "Media ",
    data: [
      "Apple",
      "Samsung",
      "Microsoft",
      "Blackview",
      "CAT",
      "Google",
      "Motorola",
      "LG",
      "Nokia",
      "Acer",
      "HP",
      "Lenovo",
      "HTC",
      "Dell",
    ],
  },
  {
    title: "Fashion",
    data: [
      "Adidas",
      "Balmain",
      "Chanel",
      "Diesel",
      "Celine",
      "Dior",
      "Cavalli",
      "Barbour",
      "Fendi",
      "Dolce & Gabbana",
      "Burberry",
      "Hugo Boss",
    ],
  },
  {
    title: "Cars",
    data: ["Ferrari", "Lancia", "Skoda", "Nissan"],
  },
];

const ILoveModal = ({
  isOpen,
  onClose,
  selectedItems,
  setSelectedItems,
  handleSelect,
}) => {
  return (
    <StandardModal size="lg" isOpen={isOpen} onClose={onClose}>
      <div className="flex justify-between mb-6">
        <p className="text-xl font-bold">I Love</p>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
      {iloveData?.map((category) => (
        <div className="mb-3" key={category?.title}>
          <div className="flex justify-between">
            <p className="text-lg font-bold">{category?.title}</p>
            <span className="text-sm text-gray-500">{`${
              selectedItems[category.title]?.length || 0
            }/${category.data.length}`}</span>
          </div>
          <div className="flex flex-wrap">
            {category?.data.map((item) => (
              <button
                key={item}
                className={`rounded-full border text-[14px] border-lightSecondary px-3 py-2 m-1 ${
                  selectedItems[category.title]?.includes(item)
                    ? "bg-black text-white"
                    : ""
                }`}
                onClick={() => handleSelect(category.title, item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ))}
      <Button
        text={"Add"}
        btnClassName="rounded-full bg-[#C61323] text-white w-full text-center py-3 my-2"
      />
    </StandardModal>
  );
};

export default ILoveModal;
