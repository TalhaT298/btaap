import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Updated book data
  const books = [
    { title: "A Golden Age", author: "Tahmima Anam", year: 2007 },
    { title: "The Good Muslim", author: "Tahmima Anam", year: 2011 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", year: 1967 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Kite Runner", author: "Khaled Hosseini", year: 2003 },
    { title: "The Book Thief", author: "Markus Zusak", year: 2005 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
    { title: "The Road", author: "Cormac McCarthy", year: 2006 },
    { title: "Life of Pi", author: "Yann Martel", year: 2001 },
    { title: "The Handmaid's Tale", author: "Margaret Atwood", year: 1985 },
  ];

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Link to="/libray"></Link>
      <Helmet>
        <title>Btaap | Library</title>
      </Helmet>
      <div className="p-4">
        {/* <!-- Main Container --> */}
        <div className="max-w-5xl mx-auto">
          {/* <!-- Header --> */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Library</h1>
            <input
              type="text"
              placeholder="Search..."
              className="border rounded-lg px-4 py-2 w-1/3"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            ></input>
          </div>

          {/* <!-- Book Grid --> */}
          <div className="grid grid-cols-4 gap-6">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-lg text-center">
                  <div className="h-32 w-24 bg-gradient-to-r from-red-500 to-blue-500 mx-auto rounded-lg"></div>
                  <p className="mt-2 font-semibold">{book.title}</p>
                  <p className="text-gray-500 text-sm">{`${book.author}, ${book.year}`}</p>
                </div>
              ))
            ) : (
              <div className="col-span-4 text-center text-gray-500">
                There is no book with this name.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;