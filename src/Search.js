import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  };

  state = {
    query: ""
  };

  render() {
    return (
      <div>
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default Search;
