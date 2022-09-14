import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../BooksAPI";

import Shelf from "./Shelf";

function Home() {
  const [allBooks, setAllBooks] = useState([]);
  // const [currBooks, setCurrBooks] = useState([]);
  // const [wantBooks, setWantBooks] = useState([]);
  // const [readBooks, setReadBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getAll();
      setAllBooks(res);
    }

    fetchData();
  }, []);

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
            />
            <Shelf
              header="Want To Read"
              books={allBooks.filter((book) => book.shelf === "wantToRead")}
            />
            <Shelf
              header="Read"
              books={allBooks.filter((book) => book.shelf === "read")}
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
