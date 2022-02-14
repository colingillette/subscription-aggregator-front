import React from "react";

function TimeStampRenerer({ copy, timeStamp }) {
  const ts = timeStamp.split("T")[0];

  return (
    <p>
      {copy}: {ts}
    </p>
  );
}

export default TimeStampRenerer;
