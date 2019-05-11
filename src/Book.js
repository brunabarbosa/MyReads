import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    onUpdateShelf: PropTypes.func.isRequired
  };

  static defaultProps = {
    shelf: "none"
  };

  render() {
    const { title, authors } = this.props.book;
    const { book, shelf, thumbnail, onUpdateShelf } = this.props;

    return (
      <div>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${thumbnail})`
              }}
            />
            <div className="book-shelf-changer">
              <select
                value={shelf}
                onChange={event => {
                  onUpdateShelf(book, event.target.value);
                }}
              >
                <option value="move" disabled>
                  Move to...
                </option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          {authors && authors.length > 0 && (
            <div className="book-authors">{"".concat(authors)}</div>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
