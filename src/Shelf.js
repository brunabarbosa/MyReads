import React, { Component } from "react";
import PropTypes from "prop-types";
import Book from "./Book";

class Shelf extends Component {
  static propTypes = {
    shelfName: PropTypes.string.isRequired
  };

  state = {};

  render() {
    const { shelfName } = this.props;
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <Book />
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
