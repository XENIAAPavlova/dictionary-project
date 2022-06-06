import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

export default function Results(props) {
  if (props.result) {
    return (
      // <div className="card shadow-lg p-3 mt-5 mb-5 bg-body rounded">
      <div className="results justify-content-start fs-5 mt-5">
        <h2>{props.result.word}</h2>
        {props.result.phonetics.map(function (phonetic, index) {
          return (
            <div className="card shadow-sm p-3 mt-5 mb-5 bg-body rounded-3">
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            </div>
          );
        })}
        {/* </div> */}
        {/* <div className="card shadow-lg p-3 mt-5 mb-5 bg-body rounded"> */}
        <div className="definition justify-content-start fs-5">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div className="card shadow-sm p-3 mt-5 mb-5 bg-body rounded-3">
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    );
  } else {
    return null;
  }
}
