import React, { useState } from "react";
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleAddBookClick = () => {
    navigate('/add-book');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <Button variant="success" onClick={handleAddBookClick}>
        Add Book
      </Button>
    </div>
  );
};

export default SearchBar;
