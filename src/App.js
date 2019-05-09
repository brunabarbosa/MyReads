import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";
import { Route, Link } from "react-router-dom";
import Search from "./Search";
import { getAll, update } from "./BooksAPI";

class App extends Component {
  state = {
    books: []
  };

  retrieveBooks() {
    getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  componentDidMount() {
    this.retrieveBooks();
  }

  updateShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(currentState => ({
        books: currentState.books
          .filter(item => item.id !== book.id)
          .concat([book])
      }));
    });
  };

  render() {
    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>

              <Shelf
                shelfName={"Currently Reading"}
                books={this.state.books.filter(
                  book => book.shelf === "currentlyReading"
                )}
                onUpdateShelf={this.updateShelf}
              />

              <Shelf
                shelfName={"Want to Read"}
                books={this.state.books.filter(
                  book => book.shelf === "wantToRead"
                )}
                onUpdateShelf={this.updateShelf}
              />

              <Shelf
                shelfName={"Read"}
                books={this.state.books.filter(book => book.shelf === "read")}
                onUpdateShelf={this.updateShelf}
              />

              <Link to="/search" className="open-search">
                <button>Add a book</button>
              </Link>
            </div>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Search
              onSearch={() => history.push("/")}
              books={this.state.books}
              onUpdateShelf={this.updateShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
