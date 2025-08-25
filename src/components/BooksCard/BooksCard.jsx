// src/components/BookCard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ id, name, image, brand, category, price }) {
  return (
    <div className="bg-white rounded-2xl h-[500px] flex flex-col w-[200px]  ">
     
      <img
        src={image}
        className="h-[300px] w-full object-cover p-4"
      />

      
      <div className="p-4 flex flex-col flex-grow h-100">
        <h3 className="text-lg font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-sm text-gray-600 mb-2">{category}</p>

        <div className="mt-auto">
          <p className="text-base font-bold text-gray-800 mb-3">${price}</p>
          <Link to={`/bookspage/${id}`}>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}