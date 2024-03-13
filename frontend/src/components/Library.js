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
    setTimeout(async () => {
      let searchData = {
        search: term
      }

      if(term === '' || term === undefined || term === null){
          axios
        .get("http://localhost:8082/v1/books")
        .then((response) => setBooks(response.data.books))
        .catch((error) => console.error("Error fetching data: ", error));
      }else{
          axios
            .post("http://localhost:8082/v1/books/search", searchData, {
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((response) => setBooks(response.data.result))
            .catch((error) => console.error("Error fetching data: ", error));;
      }
    }
    , 500)
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} bookState={setBooks}/>
    </div>
  );
};

export default Library;