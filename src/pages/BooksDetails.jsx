import React from "react";
import { useParams, Link } from "react-router-dom";
import books from "../books";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const book = books.find((b) => b.id === id);

  if (!book) {
    return <h2 className="text-center text-red-500">Book not found!</h2>;
  }

  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <div className="flex flex-col w-100 gap-8 bg-gray-800 p-6 justify-center">
        <img
          src={book.image}
          alt={book.name}
          className="w-[300px] h-[400px] object-cover rounded-lg shadow-md"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2">{book.name}</h2>
            <p className="text-lg text-gray-300 mb-2">By: {book.brand}</p>
            <p className="text-md text-gray-400 mb-4">{book.description}</p>
            <p className="text-xl font-bold text-green-400 mb-2">${book.price}</p>
            <p className="text-md text-gray-300 mb-2">Rating: {book.rating} Stars</p>
            <p className="text-md text-gray-300 mb-2">Reviews: {book.numReviews}</p>
            <p className="text-md text-gray-300 mb-4">In Stock: {book.countInStock}</p>
          </div>
          <div className="flex items-center">
            <button className="bg-green-600 px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300">
              Add to Cart
            </button>
            <Link to="/bookspage" className="ml-4 text-blue-400 hover:underline transition duration-300">
              Back to Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
