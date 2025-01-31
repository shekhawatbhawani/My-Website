import React from "react";
import { Link } from "react-router-dom";
const CardComponent = ({img, title, desc, live, git }) => {
  return (
    <div className="max-w-full my-10 p-2 border-2 border-gray-200 bg-white shadow-2xl rounded-2xl overflow-hidden">
      <img
        src={img}
        alt="Card Image"
        className="w-full h-40 rounded-2xl object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{desc}</p>
        <div className="flex justify-between">
          <button className="bg-blue-500 p-2 text-sm text-white cursor-pointer rounded hover:bg-blue-600">
          <a href={git}> Source Code</a>
          </button>
          <button className="bg-green-500 text-sm text-white p-2 cursor-pointer rounded hover:bg-green-600">
            <a href={live}>Live Demo</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
