import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);

    // documentation: https://dictionaryapi.dev/
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary text-center mt-4 mb-4">
      <form className="row justify-content-center" onSubmit={search}>
        <div className="col-6">
          <input
            className="form-control"
            type="search"
            onChange={handleKeywordChange}
          />
        </div>
        <div className="col-2">
          <button
            type="submit"
            className="btn btn btn-outline-secondary justify-content-md-end"
          >
            Search
          </button>
        </div>
      </form>
      <div className="hint mb-2 mt-4 text-center">
        suggested words: sunset, wine, forest...
      </div>
      <Results result={result} />
    </div>
  );
}
