import React from "react";

export default function Meaning(props) {
  return (
    <div className="meaniing justify-content-center fs-5 fw-normal mb-4">
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
                {definition.definition}
                <br />
                <em>{definition.example}</em>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
