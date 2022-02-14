import React from "react";
import TimeStampRenerer from "../common/TimeStampRenderer";
import MediaTypeTimeEstimate from "../common/MediaTypeTimeEstimate";

function Entry({ queue }) {
  const entry = JSON.parse(queue).entry;

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 mb-4">
      <div className="card h-100 p-4 mt-4">
        <div className="entry-info">
          <div className="border-bottom border-dark mb-2">
            <h4 className="entry-name">{entry.channel.name}</h4>
          </div>
          <h5>
            <i>{entry.name}</i>
          </h5>
          <MediaTypeTimeEstimate
            mediaType={entry.mediaType}
            minutes={entry.length}
          />
          <TimeStampRenerer
            copy={"Released"}
            timeStamp={entry.releaseTimeStamp}
          />
          <p>{entry.description}</p>
          <div>
            Authors:{" "}
            {entry.authors.map(function (author, idx) {
              return <li key={idx}>{author.name}</li>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entry;
