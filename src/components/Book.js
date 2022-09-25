import React from "react";

function Book({ book, moveBook, shelf }) {
  return (
    <div key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select
              defaultValue={shelf}
              onChange={(e) => {
                moveBook(book, e.target.value);
              }}
            >
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book?.authors?.map((author, index) => (
            <React.Fragment key={index}>
              {author} <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Book;
