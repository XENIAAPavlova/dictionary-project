import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import listen from "./undraw_Recording_re_5xyq.png";
import "./Results.css";
import "./Meaning.css";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="results justify-content-start mt-5">
        {/* <h2>{props.result.word}</h2> */}
        {props.result.phonetics.slice(1, 2).map(function (phonetic, index) {
          return (
            <section>
              <div className="main-search card shadow-lg p-3 mt-5 mb-5 bg-body rounded">
                <div className="row">
                  <div className="col-6">
                    <div className="result text-center mt-5 mb-5 bg-body rounded-3">
                      <h2 className="result-details text-start mb-5">
                        {props.result.word}
                      </h2>
                      <div key={index}>
                        <Phonetic phonetic={phonetic} />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <img
                      src={listen}
                      className="d-none d-md-block"
                      alt="audio-img"
                      width={300}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
        <div className="definition justify-content-start">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <section className="meaning">
                <div key={index}>
                  <Meaning meaning={meaning} />
                </div>
              </section>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
