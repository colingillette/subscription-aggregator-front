import React from "react";
import EntryList from "./EntryList";

const Queue = () => {
  return (
    <div className="container text-center">
      <h2>Queue</h2>
      <p>Listed FIFO (First In First Out)</p>
      <EntryList />
    </div>
  );
};

export default Queue;
