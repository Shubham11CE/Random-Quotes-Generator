import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState({
    content: "Your quote will appear here",
    author: "Author name will appear here",
    tags: ["nice"],
  });

  function getQuote() {
    try {
      fetch("https://api.quotable.io/random")
        .then((response) => response.json())
        .then((quote) => {
          setData(quote);
        });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Random Quote Generator</h1>
        <h3 className="Quote">Quote: {data.content}</h3>
        <h5 className="Author">Author: {data.author}</h5>
        <h5 className="Author">Tag: {data.tags[0]}</h5>
        <button className="Generator" onClick={getQuote}>
          Get Quote
        </button>
      </header>
    </div>
  );
}

export default App;
