// src/components/BookCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../slices/cartSlice";

export default function BookCard({ id, name, image, brand, category, price }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, image, brand, category, price }));
  };

  return (
    <div className="bg-white rounded-2xl h-[550px] flex flex-col w-[200px]  ">
     
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
          <div className="space-y-2">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Add to Cart
            </button>
            <Link to={`/bookspage/${id}`}>
              <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}