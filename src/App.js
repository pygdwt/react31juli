import React, { Component, useState, useEffect } from "react";

const App = () => {
  //state
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [url, setUrl] = useState(
    "https://hn.algolia.com/api/v1/search?query=react"
  );

  //fetch
  const fetchNews = () => {
    fetch(url)
      .then(result => result.json())
      .then(data => setNews(data.hits))
      .catch(error => console.log(error));
  };
  useEffect(() => {
    fetchNews();
  }, [url]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setUrl(`https://hn.algolia.com/api/v1/search?query= ${searchQuery}`);
  };

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button>Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
};

/* const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Sabar aja</h2>
      <button onClick={increment}>Clicked {count} times</button>
    </div>
  );
};

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div>
        <h2>hanjink</h2>
        <button onClick={this.increment}>
          Clicked {this.state.count} times{" "}
        </button>
      </div>
    );
  }
}*/

export default App;
