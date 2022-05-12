import React from "react";

export default function Results(props) {
  if (props.result) {
    return <div className="results mt-5"> Hey</div>;
  } else {
    return null;
  }
}
