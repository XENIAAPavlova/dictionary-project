import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import Photos from "./Photos";
import "./Results.css";
import "./App.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log(response.data);
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    // documentation: https://dictionaryapi.dev/

    let pexelsApiKey =
      "563492ad6f91700001000001323a27a380c84843a52d7e2b5c1bf85b";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary mt-4 mb-4">
      <form className="row justify-content-center" onSubmit={search}>
        <div className="col-6">
          <input
            className="form-control shadow-sm"
            type="search"
            onChange={handleKeywordChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn justify-content-md-end">
            Search
          </button>
        </div>
      </form>
      <div className="hint mb-2 mt-4 fst-italic fs-6 text-start">
        suggested words: sunset, wine, forest...
      </div>
      <Results result={result} />
      <Photos photos={photos} />
    </div>
  );
}
