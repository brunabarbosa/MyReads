import React from "react";
import Book from "./Book";

const BookList = props => {
  return (
    <ol className="books-grid">
      {props.books.map(book => (
        <li key={book.id}>
          {book.imageLinks && (
            <Book
              book={book}
              thumbnail={book.imageLinks.thumbnail}
              shelf={book.shelf}
              onUpdateShelf={props.onUpdateShelf}
            />
          )}
        </li>
      ))}
    </ol>
  );
};

export default BookList;
