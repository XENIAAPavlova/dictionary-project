import React from "react";
import "./Meaning.css"
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaniing justify-content-start fs-5 fw-light mb-4">
      <div className="part-of-speech row fw-bold mb-3 p-5">
        {props.meaning.partOfSpeech}
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div
            className=" row word-definition justify-content-start lh-sm"
            key={index}
          >
            <div className="col-12 mb-3">
              <p>
                <strong>Definition:</strong>
                {definition.definition}
                <br />
                <strong>Example:</strong>
                <em>{definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
