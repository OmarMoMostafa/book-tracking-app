import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { getAll, update } from "./BooksAPI";

import Home from "./components/Home";
import Search from "./components/Search";

function App() {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await getAll();
      setAllBooks(res);
    }

    fetchData();
  }, []);

  const moveBook = (book, to) => {
    const movedBook = allBooks
      .filter((b) => b.id === book.id)
      .map((m) => {
        m.shelf = to;
        return m;
      });

    const updatedBooks = allBooks.filter((b) => b.id !== book.id);

    setAllBooks(updatedBooks.concat(movedBook));

    update(book, to);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home moveBook={moveBook} allBooks={allBooks} />}
        />
        <Route path="/search" element={<Search moveBook={moveBook} />} />
      </Routes>
    </div>
  );
}

export default App;
