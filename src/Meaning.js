import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning mb-4">
      <div className="part-of-speech row fw-bold fs-4 mb-3 p-2">
        {props.meaning.partOfSpeech}
      </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div className="definitions-all justify-content-start">
            <div className="definition-synonyms" key={index}>
              <div className="definition">{definition.definition}</div>
              <div className="example fst-italic pb-1">{definition.example}</div>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
