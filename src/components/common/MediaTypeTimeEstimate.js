import React from "react";

function MediaTypeTimeEstimate({ mediaType, minutes }) {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return (
    <p>
      {mediaType} ~ {hours}:{mins.toString().padStart(2, "0")}
    </p>
  );
}

export default MediaTypeTimeEstimate;
