import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import listen from "./undraw_Recording_re_5xyq.png";
import "./Results.css";

export default function Results(props) {
  if (props.result) {
    return (
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
                    <div className="mt-5 mb-5 bg-body rounded-3">
                      <h2 className="result-details mb-5">
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
            );
          })}
          <div className="definition justify-content-start fs-5">
            {props.result.meanings.map(function (meaning, index) {
              return (
                <section className=" meaning card shadow-sm p-3 mt-5 mb-5 bg-body rounded-3">
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
