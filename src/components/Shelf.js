import React from "react";
import Book from "./Book";

function Shelf(props) {
  const renderBooks = () => {
    const rendered = props.books.map((book) => {
      return (
        <Book
          key={book.id}
          title={book.title}
          authors={book.authors}
          shelf={book.shelf}
          img={book.imageLinks.thumbnail}
        />
      );
    });
    return <>{rendered}</>;
  };

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.header}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">{renderBooks()}</ol>
      </div>
    </div>
  );
}

export default Shelf;
