import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
 

const Library = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Updated book data with image URLs and href (links)
  const books = [
    {
      id: 1,
      title: "Artificial Intelligence Technology",
      author: "Huawei Technologies Co., Ltd.",
      year: 2023,
      // image: book1,
      href: "https://github.com/TalhaT298/importantBook/blob/main/Artificial%20Intelligence%20Technology.pdf",
    },
    {
      id: 2,
      title: "The Power of Habit",
      author: " Charles Duhigg",
       
      // image: book2,
      href: "https://github.com/TalhaT298/importantBook/blob/main/The%20Power%20of%20Habit.pdf",
    },
    {
      id: 3,
      title: "1984",
      author: "George Orwell",
      year: 1949,
      image: "https://via.placeholder.com/150",
      href: "/book/3",
    },
    {
      id: 4,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      image: "https://via.placeholder.com/150",
      href: "/book/4",
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      image: "https://via.placeholder.com/150",
      href: "/book/5",
    },
    {
      id: 6,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      image: "https://via.placeholder.com/150",
      href: "/book/6",
    },
    {
      id: 7,
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      year: 1967,
      image: "https://via.placeholder.com/150",
      href: "/book/7",
    },
    {
      id: 8,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      year: 1951,
      image: "https://via.placeholder.com/150",
      href: "/book/8",
    },
    {
      id: 9,
      title: "Brave New World",
      author: "Aldous Huxley",
      year: 1932,
      image: "https://via.placeholder.com/150",
      href: "/book/9",
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      year: 1988,
      image: "https://via.placeholder.com/150",
      href: "/book/10",
    },
    {
      id: 11,
      title: "The Kite Runner",
      author: "Khaled Hosseini",
      year: 2003,
      image: "https://via.placeholder.com/150",
      href: "/book/11",
    },
    {
      id: 12,
      title: "The Book Thief",
      author: "Markus Zusak",
      year: 2005,
      image: "https://via.placeholder.com/150",
      href: "/book/12",
    },
    {
      id: 13,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      year: 1937,
      image: "https://via.placeholder.com/150",
      href: "/book/13",
    },
    {
      id: 14,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      year: 1954,
      image: "https://via.placeholder.com/150",
      href: "/book/14",
    },
    {
      id: 15,
      title: "Harry Potter and the Philosopher's Stone",
      author: "J.K. Rowling",
      year: 1997,
      image: "https://via.placeholder.com/150",
      href: "/book/15",
    },
    {
      id: 16,
      title: "The Da Vinci Code",
      author: "Dan Brown",
      year: 2003,
      image: "https://via.placeholder.com/150",
      href: "/book/16",
    },
    {
      id: 17,
      title: "The Hunger Games",
      author: "Suzanne Collins",
      year: 2008,
      image: "https://via.placeholder.com/150",
      href: "/book/17",
    },
    {
      id: 18,
      title: "The Road",
      author: "Cormac McCarthy",
      year: 2006,
      image: "https://via.placeholder.com/150",
      href: "/book/18",
    },
    {
      id: 19,
      title: "Life of Pi",
      author: "Yann Martel",
      year: 2001,
      image: "https://via.placeholder.com/150",
      href: "/book/19",
    },
    {
      id: 20,
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      year: 1985,
      image: "https://via.placeholder.com/150",
      href: "/book/20",
    },
  ];

  // Filter books based on search query
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
  <Link to="/library"></Link>
  <Helmet>
    <title>Talha | Book</title>
  </Helmet>
  <div className="p-4">
    {/* Main Container */}
    <div className="">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h1
          className="text-2xl md:text-3xl font-bold text-center md:text-left"
          style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}
        >
          Books That Everyone Should Read At Least Once
        </h1>
        <textarea
          type="text"
          placeholder="Search..."
          className="border rounded-lg px-4 py-2 w-full md:w-1/3"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></textarea>
      </div>

      {/* Book Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Link
              to={book.href}
              key={book.id}
              className="border-2 border-cyan-800 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
            >
              <div className="h-40 w-24 mx-auto rounded-lg overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className="mt-2 font-semibold text-black"
                style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}
              >
                {book.title}
              </p>
              <p className="text-gray-500 text-sm">{`${book.author}, ${book.year}`}</p>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
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