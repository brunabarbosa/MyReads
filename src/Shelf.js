import React, { Component } from "react";
import PropTypes from "prop-types";
import BookList from "./BookList";

class Shelf extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  };

  static defaultProps = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  };

  state = {};

  render() {
    const { shelfName, books, onUpdateShelf } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <BookList books={books} onUpdateShelf={onUpdateShelf} />
        </div>
      </div>
    );
  }
}

export default Shelf;
