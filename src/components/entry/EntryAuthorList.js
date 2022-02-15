import React from "react";

function EntryAuthorList({ authors }) {
  let str = "";
  for (let i = 0; i < authors.length; i++) {
    if (i >= authors.length - 1) {
      str += authors[i].name;
    } else {
      str += authors[i].name;
      str += ", ";
    }
  }

  if (str !== "") {
    return (
      <div>
        <p>
          <u>Authors</u>
        </p>
        <p>{str}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p>
          <u>No Authors Found</u>
        </p>
      </div>
    );
  }
}

export default EntryAuthorList;
