import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaniing justify-content-start fs-4 fw-normal mb-4">
      <div className="row fw-bold mb-3">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="meaning-definition justify-content-start fw-light fs-5 lh-sm">
            <div key={index}>
              <p>{definition.definition}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
