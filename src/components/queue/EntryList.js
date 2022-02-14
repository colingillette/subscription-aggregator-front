import React from "react";
import useRequestRestQueues, {
  REQUEST_STATUS,
} from "../../hooks/useRequestRestQueues";
import ReactPlaceHolder from "react-placeholder";
import Entry from "./Entry";

function EntryList() {
  const { data, requestStatus, error } = useRequestRestQueues();

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return (
      <div className="text-danger">Loading Queue Data Failed: {error}</div>
    );
  }

  return (
    <div className="container">
      <ReactPlaceHolder
        type="media"
        rows={15}
        ready={requestStatus === REQUEST_STATUS.SUCCESS}
      >
        <div className="row">
          {data.map(function (queue) {
            return <Entry key={queue.id} queue={JSON.stringify(queue)} />;
          })}
        </div>
      </ReactPlaceHolder>
    </div>
  );
}

export default EntryList;
