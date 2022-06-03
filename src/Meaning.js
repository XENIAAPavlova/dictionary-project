import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaniing justify-content-center fs-5 fw-light mb-4">
      <div className="part-of-speech row fw-bold mb-3">
        {props.meaning.partOfSpeech}
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div
            className=" row word-definition justify-content-center lh-sm"
            key={index}
          >
            <div className="col-5 mb-3">
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
