import React, { useState, useEffect } from "react";
import BookList from "./BookList";
import SearchBar from "./SearchBar";
import axios from "axios";

const Library = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from your API or use a sample API
    axios
      .get("http://localhost:8082/v1/books")
      .then((response) => setBooks(response.data.books))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={filteredBooks} bookState={setBooks}/>
    </div>
  );
};

export default Library;