import React from "react";
import { Card } from "react-bootstrap";

const BookList = ({ books }) => {
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
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default BookList;
