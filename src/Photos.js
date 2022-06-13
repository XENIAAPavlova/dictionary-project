import React from "react";
import "./App.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="Photos">
            <div className="main-search card shadow p-3 mt-3 mb-5 bg-body rounded">
              <div className="row">
                {props.photos.map(function (photo, index) {
                  return (
                    <div className="col-md-4 mb-1 p-2 mx-auto">
                      <a
                        href={photo.src.original}
                        target="_blank"
                        rel="noreferrer"
                        key={index}
                      >
                        <img
                          src={photo.src.landscape}
                          alt="search-pic"
                          className="img-fluid d-inline"
                        />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
