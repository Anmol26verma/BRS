import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(
      `https://api.openbrewerydb.org/breweries?by_city=${query}`
    );
    setResults(res.data);
  };

  return (
    <div>
      <h1>Search Breweries</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            value={query}
            onChange={onChange}
            placeholder="Search by city"
            required
          />
        </div>
        <input type="submit" value="Search" />
      </form>
      <ul>
        {results.map((brewery) => (
          <li key={brewery.id}>
            <h2>{brewery.name}</h2>
            <p>
              {brewery.street}, {brewery.city}, {brewery.state}
            </p>
            <p>{brewery.phone}</p>
            <p>
              <a href={brewery.website_url}>{brewery.website_url}</a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
