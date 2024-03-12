import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { Card, Button } from "react-bootstrap";
import axios from "axios";

const BookList = ({ books, bookState }) => {
  const navigate = useNavigate();

  const onDeleteBook = async (bookId) => {
    // Perform the deletion logic (e.g., make an API call)
        // Fetch data from your API or use a sample API
        await axios
          .delete(`http://localhost:8082/v1/book/${bookId}`)
          .then(() => bookState(books.filter((book) => book.id !== bookId)))
          .catch((error) => console.error("Error fetching data: ", error));
    // console.log(`Deleting book with id ${bookId}`);
  };

  const onEditBook = async (bookId) => {
    navigate(`/edit-book/${bookId}`);
  };

  return (
    <div className="book-list">
      {books.map((book) => (
        <Card key={book.id} className="mb-3" style={{ width: "250px" }}>
          <Card.Img
            variant="top"
            src="https://e7.pngegg.com/pngimages/142/76/png-clipart-white-and-orange-book-logo-symbol-yellow-orange-logo-ibooks-orange-logo-thumbnail.png"
            alt={book.title}
          />
          <Card.Body>
            <Card.Title>
              {book.title} - {book.author} - {book.publicationYear}
            </Card.Title>
            <Card.Body>{book.summary}</Card.Body>
            <Button variant="warning" onClick={() => onEditBook(book.id)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => onDeleteBook(book.id)}>
              Delete
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
