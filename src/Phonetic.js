import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic fs-6 fst-normal mb-3">
      <div className="row">
        <div className="col justify-content-start">
          <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
            Listen
          </a>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col justify-content-start">{props.phonetic.text}</div>
      </div>
    </div>
  );
}
