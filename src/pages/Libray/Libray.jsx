import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample book data
  const books = [
    { title: "A Golden Age", author: "Tahmima Anam", year: 2007 },
    { title: "The Good Muslim", author: "Tahmima Anam", year: 2011 },
    { title: "u", author: "Author", year: "Year" },
    { title: "n", author: "Author", year: "Year" },
    { title: "h", author: "Author", year: "Year" },
    { title: "g", author: "Author", year: "Year" },
    { title: "p", author: "Author", year: "Year" },
    { title: "q", author: "Author", year: "Year" },
  ];

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Link to="/library"></Link>
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