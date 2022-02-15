import React from "react";
import useRequestRestEntries, {
  REQUEST_STATUS,
} from "../../hooks/useRequestRestEntries";
import Entry from "../entry/Entry";

function FavoritesList() {
  const { favorites, requestStatus, error } = useRequestRestEntries();

  if (requestStatus === REQUEST_STATUS.FAILURE) {
    return <div className="text-danger">Loading Favorites Failed: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {favorites.map(function (entry) {
          return <Entry key={entry.id} entry={entry} />;
        })}
      </div>
    </div>
  );
}

export default FavoritesList;
