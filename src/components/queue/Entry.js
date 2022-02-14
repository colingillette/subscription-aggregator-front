import React from "react";

function Entry({ queue }) {
  const entry = JSON.parse(queue).entry;

  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
      <div className="card card-height p-4 mt-4">
        <div className="entry-info">
          <h3 className="entry-name">{entry.name}</h3>
          <p>{entry.description}</p>
          <p>
            {entry.mediaType} {entry.length} views: {entry.views}
          </p>
          <p>{entry.releaseTimeStamp}</p>
          <p>{entry.channel.name}</p>
          <p>{entry.provider.name}</p>
          <p>
            Authors:{" "}
            {entry.authors.map(function (author) {
              <p key={author.id + entry.id}>{author.name}</p>;
            })}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Entry;
