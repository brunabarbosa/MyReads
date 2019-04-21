import React, { Component } from "react";
import "./App.css";
import Shelf from "./Shelf";

class App extends Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf shelfName="None" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
