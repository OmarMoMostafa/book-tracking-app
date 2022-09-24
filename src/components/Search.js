import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Book from "./Book";

function Search(props) {
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (searchInput) {
      search(searchInput).then((res) => {
        if (res.error) {
          setSearchResult([]);
        } else {
          setSearchResult(res);
        }
      });
    }
  }, [searchInput]);

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.map((book) => {
              return (
                <li key={book.id}>
                  <Book book={book} moveBook={props.moveBook} />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Search;
