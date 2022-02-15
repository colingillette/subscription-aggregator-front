import { useEffect, useState } from "react";
import axios from "axios";

export const REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure",
};

const restUrl = "http://localhost:8080/";

function useRequestRestEntries() {
  const [favorites, setFavorites] = useState([]);
  const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getFavorites() {
      try {
        const result = await axios.get(restUrl + "entries/favorites");
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        setFavorites(result.data);
      } catch (e) {
        setRequestStatus(REQUEST_STATUS.FAILURE);
        setError(e);
      }
    }
    getFavorites();
    return () => {
      setFavorites({});
    };
  }, []);

  return {
    favorites,
    requestStatus,
    error,
  };
}

export default useRequestRestEntries;
