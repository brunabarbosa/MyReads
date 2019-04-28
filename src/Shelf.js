import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  };

  state = {};

  render() {
    const { shelfName, books } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => (
              <li key={book.id}>
                {book.imageLinks && (
                  <Book
                    title={book.title}
                    author={"".concat(book.authors)}
                    thumbnail={book.imageLinks.thumbnail}
                    shelf={book.shelf}
                  />
                )}
                {!book.imageLinks && (
                  <Book
                    title={book.title}
                    author={"".concat(book.authors)}
                    shelf={book.shelf}
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Shelf;
