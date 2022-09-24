import React from "react";
import { Link } from "react-router-dom";

import Shelf from "./Shelf";

function Home(props) {
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
              books={props.allBooks.filter(
                (book) => book.shelf === "currentlyReading"
              )}
              moveBook={props.moveBook}
            />
            <Shelf
              header="Want To Read"
              books={props.allBooks.filter(
                (book) => book.shelf === "wantToRead"
              )}
              moveBook={props.moveBook}
            />
            <Shelf
              header="Read"
              books={props.allBooks.filter((book) => book.shelf === "read")}
              moveBook={props.moveBook}
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
