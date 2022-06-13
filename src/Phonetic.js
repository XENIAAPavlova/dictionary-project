import React from "react";
import "./App.css";

export default function Phonetic(props) {
  return (
    <div>
      <div className="Phonetic fs-6 fst-normal mb-3">
        <div className="row">
          <div className="search-word col-12 justify-content-start ms-1">
            <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
              Listen
            </a>
            <span className="transcription ms-3">{props.phonetic.text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
