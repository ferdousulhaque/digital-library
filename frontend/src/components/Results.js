// Results.js
import React from 'react';
import BookList from './BookList';

const Results = ({ searchResults }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <BookList books={searchResults} />
    </div>
  );
};

export default Results;