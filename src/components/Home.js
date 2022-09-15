import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll, update } from "../BooksAPI";

import Shelf from "./Shelf";

function Home() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getAll();
      setAllBooks(res);
    }

    fetchData();
  }, []);

  const moveBook = (id, to) => {
    const movedBook = allBooks
      .filter((b) => b.id === id)
      .map((m) => {
        m.shelf = to;
        return m;
      });

    const updatedBooks = allBooks.filter((b) => b.id !== id);

    setAllBooks(updatedBooks.concat(movedBook));
  };

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              header="Currently Reading"
              books={allBooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              moveBook={moveBook}
            />
            <Shelf
              header="Want To Read"
              books={allBooks.filter((book) => book.shelf === "wantToRead")}
              moveBook={moveBook}
            />
            <Shelf
              header="Read"
              books={allBooks.filter((book) => book.shelf === "read")}
              moveBook={moveBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
