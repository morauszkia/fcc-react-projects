import React from "react";

import { LogoTwitter } from "react-ionicons";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Your quote is loading",
      author: "",
    };

    this.getRandomQuote = this.getRandomQuote.bind(this);
  }

  getRandomQuote = async function () {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const quote = await res.json();
      this.setState({
        text: quote.content,
        author: quote.author,
      });
    } catch (error) {
      console.log(`Something went wrong: {error}`);
    }
  };

  componentDidMount() {
    this.getRandomQuote();
  }

  render() {
    return (
      <div id="quote-box">
        <h1>Get your quote!</h1>
        <div id="text">{this.state.text}</div>
        <div id="author">{this.state.author}</div>
        <button id="new-quote" onClick={this.getRandomQuote}>
          New Quote
        </button>
        <a href="https://twitter.com/intent/tweet" id="tweet-quote">
          <LogoTwitter color="#1DA1F2" height="30px" width="30px" />
        </a>
      </div>
    );
  }
}

export default App;
