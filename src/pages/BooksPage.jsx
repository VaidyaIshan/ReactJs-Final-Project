
import React, { useState } from "react";
import books from "../books";
import BookCard from "../components/BooksCard/BooksCard";

export default function BooksPage() {
  const [bookList] = useState(books);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl  text-center mb-8 text-white font-bold ">Available Books</h2>


      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {bookList.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            name={book.name}
            image={book.image}
            brand={book.brand}
            category={book.category}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
}