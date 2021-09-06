import React from "react";

function Newsitems(props) {
  return (
    <div>
      <div className="container pl-2">
        <div className="card" style={{ width: "auto" }}>
          <img
            src={
              !props.img
                ? "//thehill.com/sites/default/files/doordash_022720getty.jpg"
                : props.img
            }
            className="card-img-top"
            alt="..."
            height="300px"
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}....</h5>
            <p className="card-text text-truncate">
              {!props.desc
                ? "The City of Chicago filed lawsuits against DoorDash and Grubhub on Fr..."
                : props.desc}
              ...
            </p>
            <p class="card-text">
              <small class="text-muted">
                by{!props.author ? "unknown" : props.author}
              </small>
            </p>
            <p class="card-text">
              <small class="text-muted">Publish at{props.publishedAt}</small>
            </p>
            <a
              href={props.newsurl}
              target="_blank"
              className="btn btn-dark "
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsitems;
