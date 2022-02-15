import React, { memo } from "react";
import TimeStampRenerer from "../common/TimeStampRenderer";
import MediaTypeTimeEstimate from "../common/MediaTypeTimeEstimate";
import EntryAuthorList from "./EntryAuthorList";
import ErrorBoundary from "../common/ErrorBoundary";

const EntryNoErrorBoundary = memo(function Entry({ entry, showErrorCard }) {
  if (showErrorCard) {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12 mb-4">
        <div className="card h-100 p-4 mt-4">
          <div className="entry-info">
            <h4>ERROR!</h4>
          </div>
        </div>
      </div>
    );
  }

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
          <EntryAuthorList authors={entry.authors} />
        </div>
      </div>
    </div>
  );
}, areEqualEntry);

function areEqualEntry(prevProps, nextProps) {
  return prevProps.entry.views === nextProps.entry.views;
}

function Entry(props) {
  return (
    <ErrorBoundary
      errorUI={<EntryNoErrorBoundary {...props} showErrorCard={true} />}
    >
      <EntryNoErrorBoundary {...props} />
    </ErrorBoundary>
  );
}

export default Entry;
