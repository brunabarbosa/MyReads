import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import Book from "./Book";

class Search extends Component {
  state = {
    query: "",
    searchResult: []
  };

  updateQuery = query => {
    this.setState(() => ({
      query
    }));

    if (query !== "") {
      this.searchBooks(query);
    } else {
      this.updateBooks([]);
    }
  };

  updateBooks = result => {
    this.setState(() => ({
      searchResult: result
    }));
  };

  searchBooks = query => {
    search(query).then(books => {
      this.updateBooks(books);
    });
  };

  render() {
    const { onUpdateShelf } = this.props;
    const { query, searchResult } = this.state;

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
              value={query}
              onChange={event => this.updateQuery(event.target.value.trim())}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResult.map(book => (
              <li key={book.id}>
                <Book book={book} onUpdateShelf={onUpdateShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search;
