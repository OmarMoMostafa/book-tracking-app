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
    } else {
      setSearchResult([]);
    }
  }, [searchInput]);

  function getDifference(array1, array2) {
    return array1.filter((object1) => {
      return !array2.some((object2) => {
        return object1.id === object2.id;
      });
    });
  }

  function getSimilar(array1, array2) {
    return array1.filter((object1) => {
      return array2.some((object2) => {
        return object1.id === object2.id;
      });
    });
  }

  const renderedBooks = () => {
    const homeBooks = props.homeBooks;
    let similar = getSimilar(homeBooks, searchResult);
    let different = getDifference(searchResult, homeBooks);

    return different.concat(similar);
  };

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
            {renderedBooks().map((book) => {
              return (
                <li key={book.id}>
                  <Book
                    book={book}
                    shelf={book.shelf ? book.shelf : "none"}
                    moveBook={props.moveBook}
                  />
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
