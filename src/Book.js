import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    shelf: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired
  };

  static defaultProps = {
    shelf: "none",
    thumbnail: ""
  };

  updateShelfHandler = event => {
    console.log(event.target.value);
  };

  render() {
    const { title, author, thumbnail, shelf } = this.props;

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
                onChange={event => this.updateShelfHandler(event)}
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
          <div className="book-authors">{author}</div>
        </div>
      </div>
    );
  }
}

export default Book;
