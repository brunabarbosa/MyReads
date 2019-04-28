import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";
import { Route, Link } from "react-router-dom";
import Search from "./Search";
import { getAll } from "./BooksAPI";

class App extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

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
                shelfName="Currently Reading"
                books={this.state.books.filter(
                  book => book.shelf === "currentlyReading"
                )}
              />
              <Shelf
                shelfName="Want to Read"
                books={this.state.books.filter(
                  book => book.shelf === "wantToRead"
                )}
              />
              <Shelf
                shelfName="Want to Read"
                books={this.state.books.filter(book => book.shelf === "read")}
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
              books={this.state.books}
              onSearch={() => history.push("/")}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
