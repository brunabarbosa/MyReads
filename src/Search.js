import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "./BooksAPI";
import { mergeById } from "./Utils";
import BookList from "./BookList";

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
    if (result && result.length > 0) {
      this.setState(() => ({
        searchResult: mergeById(result, this.props.books)
      }));
    } else {
      this.setState(() => ({
        searchResult: []
      }));
    }
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
          <BookList books={searchResult} onUpdateShelf={onUpdateShelf} />
        </div>
      </div>
    );
  }
}

export default Search;
