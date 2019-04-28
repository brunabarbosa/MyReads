import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { search } from "./BooksAPI";
import Book from "./Book";

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  state = {
    searchResult: [],
    query: ""
  };

  updateQuery = query => {
    this.setState(() => ({
      query: query
    }));
    query.trim() ? this.searchBooks(query) : this.cleanSearch();
  };

  cleanSearch = () => {
    this.setState(() => ({
      searchResult: []
    }));
  };

  searchBooks = query => {
    search(query)
      .then(books => {
        if (books && books.length > 0) {
          this.setState(() => ({
            searchResult: books
          }));
        } else {
          this.cleanSearch();
        }
      })
      .catch(e => {
        console.log(`Error: ${e}`);
      });
  };

  render() {
    return (
      <div>
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event =>
                this.updateQuery(event.target.value.toLowerCase())
              }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResult.map(book => (
              <li key={book.id}>
                {book.imageLinks && (
                  <Book
                    title={book.title}
                    author={book.authors}
                    thumbnail={book.imageLinks.thumbnail}
                  />
                )}
                {!book.imageLinks && (
                  <Book title={book.title} author={book.authors} />
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
